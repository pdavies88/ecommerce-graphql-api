const { gql } = require("apollo-server");

module.exports = gql`
  type Box {
    _id: ID
    name: String
    description: String
    image: String
    cost: Int
    inventory: Int
    createdAt: String
  }

  input BoxInput {
    name: String
    description: String
    image: String
    cost: Int
    inventory: Int
  }

  type Query {
    box(ID: ID!): Box!
    getBoxes(amount: Int): [Box]
  }

  type Mutation {
    createBox(boxInput: BoxInput): Box!
    deleteBox(ID: ID!): Boolean
    editBox(ID: ID!, boxInput: BoxInput): Boolean
  }
`;
