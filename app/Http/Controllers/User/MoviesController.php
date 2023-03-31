<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;

class MoviesController extends Controller
{
    public function show(Movies $movie)
    {
        return inertia('User/Dashboard/Movie/Show', [
            'movie' => $movie
        ]);
    }
}
