<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GunplaMasterKit;
use Illuminate\Http\Request;

class GunplaKitController extends Controller
{
    /**
     * Search official kits based on a query.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');

        $query = GunplaMasterKit::query();

        if ($search) {
            $query->where('model_name', 'LIKE', '%' . $search . '%');
        }

        $kits = $query->orderBy('release_year', 'desc')
                      ->orderBy('model_name', 'asc')
                      ->take(15)
                      ->get();

        return response()->json($kits);
    }
}
