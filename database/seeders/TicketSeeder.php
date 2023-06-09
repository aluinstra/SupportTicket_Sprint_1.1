<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Ticket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Ticket::factory()
            ->count(10)
            ->create();

        foreach (Ticket::all() as $ticket) {
            foreach (Category::all() as $category) {
                $ticket->categories()->attach($category->id);
            }
        }
    }


    
}
