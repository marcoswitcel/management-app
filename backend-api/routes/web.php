<?php


$router->get('/identifier/{idenfifier}', [
    'as' => 'identifier',
    'uses' => 'IdentifierController@registerNew'
]);

$router->get('/expenses', [
    'as' => 'all-expenses',
    'uses' => 'ExpensesController@getAllEntries'
]);

$router->get('/incomes', [
    'as' => 'all-incomes',
    'uses' => 'IncomesController@getAllEntries'
]);