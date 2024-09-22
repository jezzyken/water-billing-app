const Models = require("../../models/Billing");
const ObjectId = require("mongoose").Types.ObjectId;
const path = require('path')

const get = async () => {
  const result = await Models.find();
  return result;
};

const getById = async (id) => {
  const result = await Models.findById(id);
  return result;
};

const getConsumerItemById = async (id) => {
  const result = await Models.findOne({ consumerId: new ObjectId(id) })
    .populate("consumerId")
    .sort({
      billingDate: -1,
    });
  return result;
};

const getConsumerItemsById = async (id) => {
  const result = await Models.find({ consumerId: new ObjectId(id) })
    .populate("consumerId")
    .sort({
      billingDate: -1,
    });
  return result;
};

const add = async (req) => {
  try {
    const previousBill = await Models.findOne({
      consumerId: req.body.consumerId,
    }).sort({ billingDate: -1 });

    let previousBalance = 0;

    if (previousBill) {
      if (previousBill.status === "Unpaid") {
        previousBalance = previousBill.totalBill;
      }
    }

    const billing = new Models({ ...req.body, previousBalance });

    billing.calculateBills(15);

    return await billing.save();
  } catch (error) {
    console.error("Error creating a new bill:", error);
    throw error;
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

const sendHTMLTemplate = async () => {
 return path.join(process.cwd(), "templates/billing-statement-template.html");
}

module.exports = {
  get,
  getById,
  getConsumerItemById,
  getConsumerItemsById,
  remove,
  add,
  update,
  sendHTMLTemplate
};
