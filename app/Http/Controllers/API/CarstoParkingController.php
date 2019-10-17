<?php


namespace App\Http\Controllers\API;

use App\CarsToParkings;
use App\Http\Controllers\Controller;
use App\Payments;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CarstoParkingController extends Controller
{

    public function index()
    {
        $cars = CarsToParkings::join('parkings', "parking_id", "=", "parkings.id")->get();
        $payment = Payments::where('code', $cars[0]->payment_code)->first();
        $current_time = Carbon::now();
        $payment_time = $payment->created_at->format('H:i:s');
        $paid_time = $payment->time;
        $time_left = $paid_time - $current_time->diffInMinutes($payment_time);
        if ($time_left < 0) {
            $time_left = 'Изтекло';
        }

        $data = [
            'car_number' => $cars[0]->car_number,
            'street' => $cars[0]->street,
            'payment_code' => $cars[0]->payment_code,
            'payment_time' => $time_left,
        ];
        return response()->json($data);
    }

    public function post(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'car_number' => 'required|max:8',
            'parking_id' => 'required',
            'parking_time' => 'request|max:120',
            'payment_code' => 'request',
        ]);

        if ($validate->fails()) {
            return response()->json(['error' => "504"]);
        } else {
            try {
                $new_car_to_parking = CarsToParkings();
                $new_car_to_parking->car_number = $request->get('car_number');
                $new_car_to_parking->parking_id = $request->get('parking_id');
                $new_car_to_parking->parking_time = $request->get('parking_time');
                $new_car_to_parking->payment_code = $request->get('payment_code');
                $new_car_to_parking->save();
                return response()->json(['success' => true, 'code' => "200"]);
            } catch (Exception $e) {
                return response()->json(['error' => "504"]);
            }
        }
    }
}
