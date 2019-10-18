<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Cars to Parkings API
Route::get('/api/ctop', "API\\CarstoParkingController@index");
Route::post('/api/ctop', "API\\CarstoParkingController@post");

//Vehicles API
Route::get('/api/vehicles', "API\\VehiclesController@index");
Route::post('/api/vehicles', "API\\VehiclesController@post");

//TAXES API
Route::get('/api/taxes', "API\\TaxesController@index");
Route::post('/api/taxes', "API\\TaxesController@post");

//Payments API
Route::get('/api/payments', "API\\PaymentsController@index");
Route::post('/api/payments', "API\\PaymentsController@post");


Route::get('/{any}', function (){
    return view('home');
})->where('any', '.*');
