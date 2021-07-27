const methods = {
  async list(request, response) {
    response.status(200).json({
      title: "Authors - WD",
    });
  },
};

module.exports = methods;
