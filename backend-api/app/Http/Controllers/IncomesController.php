<?php

namespace App\Http\Controllers;

use \App\Income;

class IncomesController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    public function getAllEntries()
    {
        return response()
            ->json(
                Income::all()
            );
    }
}