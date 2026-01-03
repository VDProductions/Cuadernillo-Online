<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Practica;
use Illuminate\Http\Request;

class WorkLogController extends Controller
{
    public function index(Request $request)
    {
        return Practica::where('user_id', $request->user()->id)
            ->orderBy('fecha', 'desc')
            ->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'fecha' => 'required|date',
            'actividad' => 'required|string',
            'horas' => 'required|integer',
            'observaciones' => 'nullable|string'
        ]);

        return Practica::create([
            'user_id' => $request->user()->id,
            'fecha' => $request->fecha,
            'actividad' => $request->actividad,
            'horas' => $request->horas,
            'observaciones' => $request->observaciones
        ]);
    }
}
