<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class PublicPagesController extends Controller
{
    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function storeContact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'phone' => 'required|string',
            'city' => 'required|string',
            'message' => 'required|string',
        ]);
        Contact::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'city' => $validated['city'],
            'message' => $validated['message'],
        ]);

        Mail::to('amanbahuguna009@gmail.com')->send(new ContactMail($validated));

        return redirect('/')->with([
            'success' => 'Submitted successfully!'
        ]);
    }
    public function about()
    {
        return Inertia::render('About');
    }

    public function privacy()
    {
        return Inertia::render('PrivacyPolicy');
    }
}
