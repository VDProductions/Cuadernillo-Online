<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\WorkLogController;

// Rutas públicas (sin token)
Route::post('/login', [AuthController::class, 'login']);

// Rutas privadas (requieren token)
Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/practica', [WorkLogController::class, 'index']);
    Route::post('/practica', [WorkLogController::class, 'store']);

});
