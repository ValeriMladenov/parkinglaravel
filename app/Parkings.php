<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parkings extends Model
{
    protected $table = 'parkings';
    protected $id = 'id';
    public $incrementing = true;
    public $timestamps = true;
}
