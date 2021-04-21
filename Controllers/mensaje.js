function helloword(req,res) {
  res.status(200).send({ message: "Hola mundo - aaah"});

}

module.exports = {
  helloworld
};
