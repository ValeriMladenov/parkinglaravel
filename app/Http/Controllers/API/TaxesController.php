<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Taxes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaxesController extends  Controller
{
    public function index()
    {
        $motorcycles = Taxes::where('car_type', '1')->get();

        $automobiles = Taxes::where('car_type', '2')->get();

        $microbuses = Taxes::where('car_type', '3')->get();

        return response()->json([$motorcycles, $automobiles, $microbuses]);
    }


    public function post(Request $request)
    {
        $validator = Validator::make($request->all(), []);
    }
}
