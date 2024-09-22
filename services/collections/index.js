const Models = require("../../models/Collection");
const BillingModels = require("../../models/Billing");
const ObjectId = require("mongoose").Types.ObjectId;

const get = async () => {
  const result = await Models.find().populate("consumerId").sort({_id: -1});
  return result;
};

const getById = async (id) => {
  const result = await Models.findById(id);
  return result;
};

const getByConsumerId = async (id) => {
  const result = await Models.find({ consumerId: new ObjectId(id) }).sort({
    _id: -1,
  });
  return result;
};

const add = async (req) => {
  const { billId, collectionType } = req.body;

  if (collectionType === "Water Bill") {
    await BillingModels.updateMany(
      { _id: { $in: billId }, status: { $ne: "Paid" } },
      { $set: { status: "Paid" } }
    );

    const newCollection = new Models(req.body);
    return await newCollection.save();
  }
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
  getByConsumerId,
  remove,
  add,
  update,
};
