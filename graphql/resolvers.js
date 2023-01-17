const Box = require("../models/Box");

// find, findbyId, save are from Mongoose Docs
module.exports = {
  Query: {
    async box(_, { ID }) {
      return await Box.findById(ID);
    },
    async getBoxes(_, { amount }) {
      return await Box.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createBox(
      _,
      { boxInput: { name, description, image, cost, inventory } }
    ) {
      const createBox = new Box({
        name: name,
        description: description,
        image: image,
        cost: cost,
        inventory: inventory,
        createdAt: new Date().toISOString(),
      });

      const res = await createBox.save();
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteBox(_, { ID }) {
      // If something deleted 1 ie: true, else 0 ie: false
      const wasDeleted = (await Box.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },
    async editBox(
      _,
      { ID, boxInput: { name, description, image, cost, inventory } }
    ) {
      // If something edited 1 ie: true, else 0 ie: false
      const wasEdited = (
        await Box.updateOne(
          { _id: ID },
          {
            name: name,
            description: description,
            image: image,
            cost: cost,
            inventory: inventory,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
