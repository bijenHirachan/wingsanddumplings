<?php

namespace App\Filament\Resources\FoodItems;

use App\Filament\Resources\FoodItems\Pages\CreateFoodItem;
use App\Filament\Resources\FoodItems\Pages\EditFoodItem;
use App\Filament\Resources\FoodItems\Pages\ListFoodItems;
use App\Filament\Resources\FoodItems\Pages\ViewFoodItem;
use App\Filament\Resources\FoodItems\Schemas\FoodItemForm;
use App\Filament\Resources\FoodItems\Schemas\FoodItemInfolist;
use App\Filament\Resources\FoodItems\Tables\FoodItemsTable;
use App\Models\FoodItem;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class FoodItemResource extends Resource
{
    protected static ?string $model = FoodItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return FoodItemForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return FoodItemInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return FoodItemsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListFoodItems::route('/'),
            'create' => CreateFoodItem::route('/create'),
            'view' => ViewFoodItem::route('/{record}'),
            'edit' => EditFoodItem::route('/{record}/edit'),
        ];
    }
}
