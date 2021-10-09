<?php

namespace Database\Seeders;

use App\Models\MovieRating;
use Illuminate\Database\Seeder;

class MovieRatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MovieRating::factory()->times(30)->create();
    }
}
