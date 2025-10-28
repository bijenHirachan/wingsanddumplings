<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Illuminate\Support\Facades\Http;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'message' => ['required', 'string', 'max:1000'],
            'recaptcha' => ['required', 'string'],
        ]);

        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => config('services.recaptcha.secret'),
            'response' => $request->recaptcha,
        ]);

        $result = $response->json();

        // Check validity + confidence score
        if (!($result['success'] ?? false) || ($result['score'] ?? 0) < 0.5) {
            return back()->withErrors(['recaptcha' => 'reCAPTCHA validation failed. Please try again.']);
        }

        Feedback::create($validated);

        return back()->with('success', 'Thank you for your feedback!');
    }
}
