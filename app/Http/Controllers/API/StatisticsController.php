<?php


namespace App\Http\Controllers\API;


use App\Cars;
use App\Http\Controllers\Controller;

class StatisticsController extends Controller
{

    public function index()
    {
        $motorcycles = Cars::where('car_type', '1')->count();
        $automobiles = Cars::where('car_type', '2')->count();
        $microbuses = Cars::where('car_type', '3')->count();


        $data = [
            'motorcycles' => $motorcycles,
            'automobiles' => $automobiles,
            'microbuses' => $microbuses,
        ];

        return response()->json($data);

    }

}