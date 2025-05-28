import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Quote {
    id: ID!
    name: String!
    email: String!
    details: String!
  }

  type Appointment {
    id: ID!
    name: String!
    address: String!
    date: String!
  }

  type Query {
    quotes: [Quote]
    appointments: [Appointment]
  }

  type Mutation {
    createQuote(name: String!, email: String!, details: String!): Quote
    createAppointment(name: String!, address: String!, date: String!): Appointment
  }
`;