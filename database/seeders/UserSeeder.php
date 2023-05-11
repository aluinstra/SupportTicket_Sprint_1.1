<?php

namespace Database\Seeders;

use App\Models\User as ModelsCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   

        ModelsCategory::create([
            'name' => 'luin',
            'email' => 'luin@live.nl',
            'email_verified_at' => now(),
            'password' => bcrypt('qwerty'),
            'remember_token' => Str::random(10),
        ]);

        ModelsCategory::factory()
            ->count(10)
            ->create();
    }
}
