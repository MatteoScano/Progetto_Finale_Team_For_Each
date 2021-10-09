<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieRatingCollection;
use App\Http\Resources\MovieRatingResource;
use App\Models\MovieRating;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class MovieRatingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(new MovieRatingCollection(MovieRating::all()), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = Validator::make($request->all(), [
            'movie_id' => 'required|integer',
            'user_id' => 'required|integer',
            'movie_rating' => 'required|integer|between:1,5'
        ]);

        if ($validatedData->fails()) {
            return response()->json($validatedData->errors(), Response::HTTP_BAD_REQUEST);
        }

        $movieRating = MovieRating::create($request->only(['movie_id', 'user_id', 'movie_rating']));

        return new MovieRatingResource($movieRating);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MovieRating  $movieRating
     * @return \Illuminate\Http\Response
     */
    public function show(MovieRating $movieRating)
    {
        return new MovieRatingResource($movieRating);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MovieRating  $movieRating
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MovieRating $movieRating)
    {
        $validatedData = Validator::make($request->all(), [
            'movie_id' => 'required|integer',
            'user_id' => 'required|integer',
            'movie_rating' => 'required|integer|between:1,5'
        ]);

        if ($validatedData->fails()) {
            return response()->json($validatedData->errors(), Response::HTTP_BAD_REQUEST);
        }

        $movieRating->update($request->only(['movie_id', 'user_id', 'movie_rating']));

        return new MovieRatingResource($movieRating);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MovieRating  $movieRating
     * @return \Illuminate\Http\Response
     */
    public function destroy(MovieRating $movieRating)
    {
        $movieRating->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * Get movie rating by movie id.
     *
     * @param  int  $movieId
     * @return \Illuminate\Http\Response
     */
    public function getMovieRatingsByMovieId(Request $request, $movieId)
    {
        $movieRatings = MovieRating::where('movie_id', $movieId)->get();

        return response()->json(new MovieRatingCollection($movieRatings), Response::HTTP_OK);
    }

    /**
     * Get movie rating by user id.
     *
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public function getMovieRatingsByUserId(Request $request, $userId)
    {
        $movieRatings = MovieRating::where('user_id', $userId)->get();

        return response()->json(new MovieRatingCollection($movieRatings), Response::HTTP_OK);
    }

    /**
     * Get movie rating by user id and by movie id.
     *
     * @param  int  $userId
     * @param  int  $movieId
     * @return \Illuminate\Http\Response
     */
    public function getMovieRatingsByUserIdAndMovieId(Request $request, $movieId,  $userId)
    {
        $movieRating = MovieRating::where('movie_id', $movieId)->where('user_id', $userId)->get();

        return response()->json(new MovieRatingCollection($movieRating), Response::HTTP_OK);
    }
}
