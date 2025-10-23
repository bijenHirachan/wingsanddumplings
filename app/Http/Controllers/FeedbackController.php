<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'message' => ['required', 'string', 'max:1000'],
        ]);

        Feedback::create($validated);

        return back()->with('success', 'Thank you for your feedback!');
    }
}
