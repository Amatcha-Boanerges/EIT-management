import  { GraphQLDateTime } from 'graphql-iso-date'
import { EIT } from './eits'

// A map of functions which return data for the schema.
const resolvers = {
    Date: GraphQLDateTime,
    Query: {
      getOneEIT(_, args) {
        return EIT.find({ where: args })
      },
      getAllAuthors() {
        return EIT.findAll()
      },
    },
    Mutation: {
      addEIT(_, args) {
        let id = EIT.insert({ Firstname: args.Firstname, Lastname: args.Lastname, Gender: args.Gender, Dateofbirth: Date(), createdAt: new Date() })
        return Tasks.findOne(id)
      },
      deleteEIT(_, args) {
        EIT.remove(args.id)
        return args.id
      },
      updateEIT(_, args) {
        let eit = EIT.findOne(args.id)
        EIT.update(args.id, {
          $set: { 
            Firstname: args.Firstname, 
            Lastname: args.Lastname, 
            Gender: args.Gender,
            Dateofbirth: args.Dateofbirth,
            }
        })
        return EIT.findOne(args.id)
      },
    },
  }
  
  export default resolvers