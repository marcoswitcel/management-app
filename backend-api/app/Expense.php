<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $fillable = [
        'name',
        'description',
        'value',
    ];
    protected $hidden = [
        'created_at', 'updated_at'
    ];
}