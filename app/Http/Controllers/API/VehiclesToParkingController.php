<?php


namespace App\Http\Controllers\API;

use App\Parkings;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VehiclesToParkingController extends Controller
{
    public function index()
    {
        $cars = Parkings::join('cars_to_parkings', "parking_id", "=", "parkings.id")->get();
        $info = [];
        foreach ($cars as $car) {
            $payment_time = $car->created_at->format('H:i:s');
            // return $payment_time; // 02:00:00
            $paid_time = $car->parking_time; // 60
            $time_left = $this->time_left($payment_time, $paid_time);

            $info[] = [
                'car_number' => $car->car_number,
                'street' => $car->street,
                'payment_code' => $car->payment_code,
                'payment_time' => $time_left,
            ];
        }
        return $info;
    }

    private function time_left($payment_time, $paid_time)
    {
        $current_time = Carbon::now();
        $a = $paid_time - ($current_time->diffInMinutes($payment_time));
        $hours = intdiv($a, 60) . ':' . ($a % 60);
        return $hours;
    }


    public function post(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'car_number' => 'required|max:8',
            'parking_id' => 'required',
            'parking_time' => 'required|max:120',
            'payment_code' => 'required',
        ]);

        if ($validate->fails()) {
            //422: Unprocessable Entity)
            return response()->json(['error' => "422"]);
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
                return response()->json(['error' => "422"]);
            }
        }
    }
}
