<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validación
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Intentar login
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Credenciales incorrectas'
            ], 401);
        }

        // Usuario autenticado
        $user = Auth::user();

        // Crear token para la app móvil
        $token = $user->createToken('mobile')->plainTextToken;

        return response()->json([
            'message' => 'Login correcto',
            'token' => $token,
            'user' => $user
        ]);
    }
}
