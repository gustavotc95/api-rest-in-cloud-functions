const admin = require('firebase-admin');

const db = admin.firestore().collection('todos');

module.exports = {
  async index (request, response) {
    db.get()
      .then(docs => {
        let todos = [];      
        
        docs.forEach((doc) => {
          todos.push({
            id: doc.id,
            description: doc.data().description
          })
        })

        return response.json(todos);
      })
      .catch(err =>
        console.log(err)
      )
  },

  async create(request, response) {
    const newTodo = {
      description: request.body.description
    }

    db.add(newTodo)
    .then(() => {
      return response.status(200).json({ message: "TODO Enviado!" });
    })
    .catch(err =>
      console.log(err)
    )
  },
}