<?php

namespace App\Http\Middleware;

use Closure;

class Identify
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /**
         * @TODO revisar isso quando a hora chegar
         * a implementação inicial de dados por usuário apenas checa o nickname provido pelo usuário
         */
        if ($request->headers->has('identifier') || $request->is('identifier/*')) {
            return $next($request);
        } else {
            return  response()
                ->json([
                    'responseType' => 'Unidentified',
                    'message' => 'Who goes there?'
                ], 401);
        };

    }
}
