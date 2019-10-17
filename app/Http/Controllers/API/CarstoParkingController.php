<?php


namespace App\Http\Controllers\API;

use App\CarsToParkings;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CarstoParkingController extends Controller
{

    public function index()
    {
        $cars  = CarsToParkings::all();
        return response()->json($cars);
    }

    public function post(Request $request)
    {

        $validate =  Validator::make($request->all(),[
           'car_number' => 'required|max:8',
           'parking_id' => 'required',
            'parking_time' => 'request|max:120',
            'payment_code' => 'request',
        ]);

        if($validate->fails()){
            return response()->json(['error'=>"504"]);
        }else{
           try{
               $new_car_to_parking = CarsToParkings();
               $new_car_to_parking->car_number = $request->get('car_number');
               $new_car_to_parking->parking_id = $request->get('parking_id');
               $new_car_to_parking->parking_time = $request->get('parking_time');
               $new_car_to_parking->payment_code = $request->get('payment_code');
               $new_car_to_parking->save();
               return response()->json(['success'=>true,'code'=>"200"]);
           }
            catch(Exception $e){
                return response()->json(['error'=>"504"]);
            }
        }
    }

}