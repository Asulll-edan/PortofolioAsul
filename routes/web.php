<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Mail;

Route::get('/test-email', function () {
    Mail::raw('Tes email dari Laravel 11', function ($mail) {
        $mail->to('muhsulrafi32@gmail.com')
             ->subject('Test Laravel 11');
    });

    return 'Email dikirim!';
});

// Main portfolio page
Route::get('/', [PortfolioController::class, 'index'])->name('home');

// Contact form submission
Route::post('/contact', [PortfolioController::class, 'submitContact'])->name('contact.submit');

// Project detail page (optional, for future expansion)
Route::get('/project/{id}', [PortfolioController::class, 'showProject'])->name('project.show');