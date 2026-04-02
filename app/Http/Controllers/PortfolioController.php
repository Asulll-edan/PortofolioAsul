<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PortfolioController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function submitContact(Request $request)
    {
        // DEBUG (hapus nanti kalau sudah jalan)
        // dd($request->all());

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        try {
            Mail::raw(
                "Nama: {$request->name}\n" .
                "Email: {$request->email}\n\n" .
                "Pesan:\n{$request->message}",
                function ($mail) use ($request) {
                    $mail->to('muhsulrafi32@gmail.com')
                         ->subject('Pesan dari ' . $request->name)
                         ->replyTo($request->email)
                         ->from(config('mail.from.address'), config('mail.from.name'));
                }
            );

            return back()->with('success', 'Pesan berhasil dikirim!');
        } catch (\Exception $e) {
            return back()->with('error', 'Error: ' . $e->getMessage());
        }
    }
}