<?php

namespace App\Filament\Resources\Feedback\Schemas;

use Filament\Schemas\Schema;
use Filament\Infolists\Components\TextEntry;

class FeedbackInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('email'),
                TextEntry::make('message'),
                TextEntry::make('created_at'),
            ]);
    }
}
