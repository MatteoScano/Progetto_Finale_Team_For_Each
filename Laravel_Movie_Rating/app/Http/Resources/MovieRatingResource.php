<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieRatingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            //'id' => $this->id,
            'movie_rating' => $this->movie_rating,
            'movie_id' => $this->movie_id,
            'user_id' => $this->user_id,
        ];
    }
}
