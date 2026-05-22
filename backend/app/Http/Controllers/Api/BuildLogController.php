<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BuildLog;
use App\Models\User;
use App\Models\GunplaMasterKit;

class BuildLogController extends Controller
{
    public function index(Request $request)
    {
        $builds = $request->user()->buildLogs()->with('kit')->latest()->get();
        return response()->json($builds);
    }

    public function store(Request $request)
    {
        $user = $request->user();

        // Map frontend grade to database enum
        $grade = $request->grade;
        if ($grade === 'MegaSize') $grade = 'PG';

        // Find or create a dummy kit based on the model_name and grade
        $kit = GunplaMasterKit::firstOrCreate(
            ['model_name' => $request->kit_name, 'grade' => $grade]
        );

        // Map frontend build type to database enum
        $buildType = $request->build_type;
        if (in_array($buildType, ['Panel Lined', 'Decals'])) {
            $buildType = 'Detailed';
        }

        // Create the build log
        $buildLog = new BuildLog();
        $buildLog->user_id = $user->id;
        $buildLog->kit_id = $kit->id;
        $buildLog->status = 'Completed';
        $buildLog->build_type = $buildType;
        $buildLog->xp_gained = $request->projected_xp;
        $buildLog->save();

        // Add XP to user
        $user->current_xp += $request->projected_xp;
        $user->save();

        return response()->json([
            'message' => 'Build successfully deployed to Hangar!',
            'build_log' => $buildLog,
            'user_xp' => $user->current_xp
        ], 201);
    }
}
