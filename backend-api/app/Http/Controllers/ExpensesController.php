<?php

namespace App\Http\Controllers;

use App\Expense;

class ExpensesController
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
                Expense::all()
            );
    }
}