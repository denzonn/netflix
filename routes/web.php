<?php

use App\Http\Controllers\Admin\MovieController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MoviesController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {

    Route::get('/', [DashboardController::class, 'index'])
        ->name('index');

    Route::get('movie/{movie:slug}', [MoviesController::class, 'show'])
        ->middleware('checkUserSubscription:true')
        ->name('movie.show');

    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])
        ->middleware('checkUserSubscription:false')
        ->name('subscriptionPlan.index');

    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])
        ->middleware('checkUserSubscription:false')
        ->name('subscriptionPlan.userSubscribe');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(
    function () {
        Route::resource('movie', MovieController::class);
    }
);

require __DIR__ . '/auth.php';
