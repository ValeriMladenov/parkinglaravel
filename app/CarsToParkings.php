<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarsToParkings extends Model
{
    protected $primaryKey = "id";
    protected $table = "cars_to_parkings";
    public $incrementing = true;
    public $timestamps = true;
    protected $hidden =['id'];
}
