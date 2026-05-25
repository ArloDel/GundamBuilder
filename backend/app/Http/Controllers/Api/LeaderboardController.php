<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LeaderboardController extends Controller
{
    /**
     * Retrieve the top pilots ranked by current_xp.
     */
    public function index(Request $request)
    {
        // Limit to top 4 for the landing page preview
        $limit = $request->query('limit', 4);
        
        $topPilots = User::orderBy('current_xp', 'desc')
            ->take($limit)
            ->get(['id', 'username', 'current_xp', 'level', 'faction']);

        return response()->json($topPilots);
    }
}
