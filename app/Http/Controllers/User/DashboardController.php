<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movies;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $feature = Movies::whereIsFeatured(true)->get();
        $movies = Movies::all();
        return inertia('User/Dashboard/Index', [
            'feature' => $feature,
            'movies' => $movies
        ]);
    }
}
