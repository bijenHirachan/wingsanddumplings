<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Models\FoodItem;
use App\Models\Category;
use App\Http\Controllers\FeedbackController;

Route::get('/', function () {
    return Inertia::render('Home',[
        'foodItems' => FoodItem::all(),
        'categories' => Category::all(),
    ]);
});

Route::get('/new', function () {
        return Inertia::render('New',[
        'foodItems' => FoodItem::all(),
        'categories' => Category::all(),
    ]);
});

Route::post('/feedback', [FeedbackController::class, 'store'])->name('feedback.store');

