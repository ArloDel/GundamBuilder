<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\BuildLogController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/builds', [BuildLogController::class, 'index']);
Route::post('/builds', [BuildLogController::class, 'store']);
