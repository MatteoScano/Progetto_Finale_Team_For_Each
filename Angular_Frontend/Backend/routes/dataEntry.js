const express = require('express');
const router = express.Router();
const DataEntry = require('../models/index').dataEntry;

router.get('/', function (req, res, next) {
    DataEntry.findAll({})
        .then(dataEntry => res.json(dataEntry))
        .catch(err => res.json(err))
    ;
});

router.get('/:id', function (req, res, next) {
    DataEntry.findOne({
            where: {
                id: req.params.id
            }
        }
    )
        .then(dataEntry => res.json(dataEntry))
        .catch(err => res.json(err));
});

router.post('/', function (req, res, next) {
    const {name, cast, director, genre, rated, reviews, evaluation, releaseDate} = req.body;

    DataEntry.create({
        name: name,
        cast: cast,
        director: director,
        genre: genre,
        rated: rated,
        reviews: reviews,
        evaluation: evaluation,
        releaseDate: releaseDate,
        
    })
        .then(dataEntry => res.status(201).json({
            dataEntry
        }))
        .catch(error => res.status(500).json({
            error
        }));
});

router.put('/:id', function (req, res, next) {
    const dataId = req.params.id;
    const {name, cast, director, genre, rated, reviews, evaluation, releaseDate} = req.body;

    DataEntry.update({
        name: name,
        cast: cast,
        director: director,
        genre: genre,
        rated: rated,
        reviews: reviews,
        evaluation: evaluation,
        releaseDate: releaseDate,
    }, {
        where: {
            id: dataId
        }
    })
        .then(dataEntry => res.status(201).json({
            dataEntry
        }))
        .catch(error => res.status(500).json({
            error
        }));
});

router.delete('/:id', function (req, res, next) {
    const data_id = req.params.id;
    console.log("inside delete");

    DataEntry.destroy({
        where: {
            id: data_id
        }
    })
        .then( status => res.status(201).json({
            status
        }))
        .catch(err => res.status(500).json({
            err
        }));
});

module.exports = router;
