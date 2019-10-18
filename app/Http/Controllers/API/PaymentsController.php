<?php


namespace App\Http\Controllers\API;


use App\Cars;
use App\Http\Controllers\Controller;
use App\Payments;

class PaymentsController extends Controller
{

    public function index()
    {

        $payments = Cars::join('payments', "car_id", "=", "cars.id")->get();

        return response()->json($payments);

    }

}