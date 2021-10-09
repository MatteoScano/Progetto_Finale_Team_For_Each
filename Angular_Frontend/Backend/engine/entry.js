const DataEntry = require('../models/index').DataEntry;

const getEntry = (req, res) => {
  DataEntry.findAll({})
    .then(entry => {
      return res.status(200).send(entry)
    })
    .catch(err => {
      return res.status(500).send(err)
    });
};

const getEntryById = (req, res) => {
  const entryId = req.params.id;

  DataEntry.findOne({
    where: {
      id: entryId
    }
  })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          error: true,
          message: 'The requested data does not exist.',
          entryId
        })
      }

      return res.status(200).send(entry);
    })
    .catch(err => {
      return res.status(500).send(err);
    })
};

const createEntry = (req, res) => {
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
    .then(entry => {
      return res.status(201).send(entry);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
};

const editEntry = (req, res) => {
  const entryId = req.params.id;
  const {name, cast, director, genre, rated, reviews, evaluation, releaseDate} = req.body;

  DataEntry.findOne({
    where: {
      id: entryId
    }
  })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          error: true,
          message: 'Cannot update a entry that does not exist.',
          entryId
        })
      }

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
          id: entryId
        }
      })
        .then(updated => {
          if(updated.pop() === 1) {
            return res.status(201).send({
              updated: true,
              entryId
            });
          } else {
            return res.status(400).send({
              updated: false,
              entryId
            })
          }
        })
        .catch(error => {
            return res.status(500).send(error);
          }
        );
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

const deleteEntry = (req, res) => {
  const entryId = req.params.id;

  DataEntry.destroy({
    where: {
      id: entryId
    }
  })
    .then( otherName => {
      console.log("res: ", otherName)
      return res.status(204).send({otherName});
    })
    .catch(error => {
      console.log("errore: ", error)
      return res.status(500).send(error);
    })
};

module.exports = {
  getEntry,
  getEntryById,
  editEntry,
  deleteEntry,
  createEntry
};