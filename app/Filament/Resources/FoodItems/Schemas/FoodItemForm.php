<?php

namespace App\Filament\Resources\FoodItems\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;

class FoodItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('price')
                    ->label('Price')
                    ->required()
                    ->numeric()
                    ->minValue(0),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->label('Category')
                    ->required(),
                Textarea::make('description')
                    ->label('Description')
                    ->maxLength(1000),
                FileUpload::make('image_url')
                    ->label('Image')
                    ->disk('public')
                    ->image(),
            ]);
    }
}
