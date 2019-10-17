<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsToParkingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars_to_parkings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('car_number');
            $table->integer('parking_id');
            $table->integer('parking_time');
            $table->string( 'payment_code');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars_to_parkings');
    }
}
