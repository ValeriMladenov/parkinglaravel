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
            $taxes = Taxes::all();

            return response()->json($taxes);
        
    }


    public function post(Request $request)
    {
        $validator = Validator::make($request->all(),[


        ]);

    }

}