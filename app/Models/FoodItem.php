<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodItem extends Model
{
    /** @use HasFactory<\Database\Factories\FoodItemFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'image_url',
        'category_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
