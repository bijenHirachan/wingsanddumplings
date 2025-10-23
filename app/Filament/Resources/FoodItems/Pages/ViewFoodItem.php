<?php

namespace App\Filament\Resources\FoodItems\Pages;

use App\Filament\Resources\FoodItems\FoodItemResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewFoodItem extends ViewRecord
{
    protected static string $resource = FoodItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
