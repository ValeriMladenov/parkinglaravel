<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Taxes extends Model
{
    protected $primaryKey = "id";
    protected $table = "taxes";
    public $incrementing = true;
    public $timestamps = true;
    protected $hidden =['ids'];
}
