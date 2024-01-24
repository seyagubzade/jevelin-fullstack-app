const { JevelinModel } = require("../models/Jevelin.model");

const JevelinModelController = {
  getAll: async (req, res) => {
    try {
      const data = await JevelinModel.find({});
      res.send(data).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await JevelinModel.findById(id);
      res.send(target).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      await JevelinModel.findByIdAndDelete(id);
      const data = await JevelinModel.find({});
      res.send(data).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
  add: async (req, res) => {
    try {
      const { name, subTitle, desc, price, model, image } = req.body;
      const data = new JevelinModel({
        name,
        subTitle,
        desc,
        price,
        model,
        image,
      });
      await data.save();
      res.send(data).status(200);
    } catch (error) {
      res.send(error).status(404);
    }
  },
};

module.exports = { JevelinModelController };
