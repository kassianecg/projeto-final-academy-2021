const httpStatus = require("http-status");
const { Horticultural } = require("../models");
const { safeObjectId } = require("../helpers");

const methods = {
  async list(request, response) {
    const horticultural = new Horticultural();

    try {
      const horticulturals = await horticultural.list();

      response.status(httpStatus.OK).json(horticulturals);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  },

  async create(request, response) {
    const {
      name,
      shade,
      image,
      description,
      category_id,
      average_price,
      measurement,
    } = request.body;

    const horticultural = new Horticultural();

    if (
      !name ||
      !shade ||
      !image ||
      !description ||
      !category_id ||
      !average_price ||
      !measurement
    ) {
      return response.status(httpStatus.BAD_REQUEST).json({
        error: 'The fields "Name" are required.',
      });
    }

    try {
      const insertedObject = await horticultural.insertOne({
        name,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      response.status(httpStatus.CREATED).json(insertedObject);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  },

  async show(request, response) {
    const { id } = request.params;
    const convertedObjectId = safeObjectId(id);

    const horticultural = new Horticultural();

    try {
      const authorToReturn = await horticultural.findOne({
        _id: convertedObjectId,
      });

      response.status(httpStatus.OK).json(authorToReturn);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const convertedObjectId = safeObjectId(id);
    const { name } = request.body;

    if (!name) {
      return response.status(httpStatus.BAD_REQUEST).json({
        error: 'The field "name" are required.',
      });
    }

    const horticultural = new Horticultural();

    try {
      const updatedObject = await horticultural.updateOne(
        { _id: convertedObjectId },
        { name, updatedAt: Date.now() }
      );

      response.status(httpStatus.OK).json(updatedObject);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  },

  async destroy(request, response) {
    const { id } = request.params;
    const convertedObjectId = safeObjectId(id);

    const horticultural = new Horticultural();

    try {
      const destroyedObject = await horticultural.updateOne(
        { _id: convertedObjectId },
        { deletedAt: Date.now() }
      );

      response.status(httpStatus.NO_CONTENT).json();
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  },
};

module.exports = methods;
