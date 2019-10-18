<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    protected $primaryKey = "id";
    protected $table = "cars";
    public $incrementing = true;
    public $timestamps = true;
    protected $hidden =['id','user_id','updated_at',];
}
