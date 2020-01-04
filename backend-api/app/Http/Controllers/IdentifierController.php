<?php

namespace App\Http\Controllers;

use App\Identifier;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use function crypt;

class IdentifierController
{
    const CONSTANT_IDENTIFIER_SALT = 'IDENTIFIER_SALT';
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    public function registerNew($idenfifier)
    {
        /**
         * o Salt é constante
         */
        $hashedIdentifier = crypt($idenfifier, static::CONSTANT_IDENTIFIER_SALT);

        $alreadyInUse = (boolean) (Identifier::where('identifier', $hashedIdentifier)->count());
        $uuid = null;
        
        if ($alreadyInUse === false) {
            $uuid = (string) Str::uuid();
            Identifier::create([
                'identifier' => $hashedIdentifier,
                'uuid' => $uuid,
            ]);
        }

        //$idenfifier
        return response()
            ->json(
                tap(new class {}, function($obj) use($alreadyInUse, $uuid) {
                    $obj->alreadyInUse = $alreadyInUse;
                    $obj->uuid = $alreadyInUse ? '' : $uuid;
                })
            );
    }
}