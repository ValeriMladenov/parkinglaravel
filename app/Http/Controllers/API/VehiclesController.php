<?php


namespace App\Http\Controllers\API;

use App\Cars;
use App\Http\Controllers\Controller;

class VehiclesController extends Controller
{

    public function index()
    {
        $vehicles = Cars::all();

        return response()->json($vehicles);

    }

}