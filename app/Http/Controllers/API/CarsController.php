<?php


namespace App\Http\Controllers\API;

use App\CarsToParkings;
use App\Http\Controllers\Controller;

class CarsController extends Controller
{

    public function index()
    {
        $cars  = CarsToParkings::all();
        return response()->json($cars);
    }

}