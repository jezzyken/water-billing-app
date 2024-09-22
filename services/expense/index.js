const Models = require("../../models/Expense");

const get = async () => {
  const result = await Models.find();
  return result;
};

const getById = async (id) => {
  const result = await Models.findById(id);
  return result;
};
const add = async (req) => {
  const newItems = new Models(req.body);
  return await newItems.save();
};

const update = async (id, data) => {
  const results = await Models.findByIdAndUpdate(id, data, {
    new: true,
  });
  return results;
};

const remove = async (id) => {
  const result = await Models.findByIdAndDelete(id);
  return result;
};

module.exports = {
  get,
  getById,
  remove,
  add,
  update,
};
