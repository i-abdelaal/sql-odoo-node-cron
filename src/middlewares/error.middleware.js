const error = function (err, req, res, next) {
    // Log errors
    console.log(err);
    res.status(500).send("Something went wrong!");
  };
  
module.exports = Object.freeze({ error });