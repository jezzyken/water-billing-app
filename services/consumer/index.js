const Models = require("../../models/Consumer");
const CollectionModel = require("../../models/Collection");

const get = async () => {
  const result = await Models.find();
  return result;
};

const getById = async (id) => {
  const result = await Models.findById(id);
  return result;
};
const add = async (req) => {
  const { consumer, payment } = req.body;

  const consumerData = new Models(consumer);

  if (!consumer.isMember) {
    const paymentData = new CollectionModel({
      ...payment,
      consumerId: consumerData._id,
    });
    await paymentData.save();
    consumerData.isMember = true
    consumerData.paymentDescription = "Membership Fee"
  }
  return await consumerData.save();
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
