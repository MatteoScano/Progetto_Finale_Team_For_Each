<?php

namespace Database\Factories;

use App\Models\MovieRating;
use Illuminate\Database\Eloquent\Factories\Factory;

class MovieRatingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MovieRating::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'movie_rating' => rand(1, 5),
            'user_id' => rand(1, 50),
            'movie_id' => rand(1, 30)
        ];
    }
}
