const page404 = (req, res) => {
  return res.status(404).send({
    error: true,
    description: 'Call not found'
  })
};

const pageError = (err, req, res, next) => {
  return res.status(err.status || 500).send(err);
};

module.exports = {
  page404,
  pageError
};