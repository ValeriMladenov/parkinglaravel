<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    protected $primaryKey = "id";
    protected $table = "payments";
    public $incrementing = true;
    public $timestamps = true;
    protected $hidden =['id',];
}
