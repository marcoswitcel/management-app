<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Identifier extends Model
{
    protected $fillable = [
        'identifier',
        'uuid',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}