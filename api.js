const express = require ('express')
const app = express()
const port = 4000


console.log('process.env', process.env)

const todos = [
  {id: 1, text: "Wake up", completed: false},
  {id: 1, text: "Drink coffee", completed: false},
  {id: 1, text: "Drink express", completed: false}
]
app.get('/', (req,res) => res.send('<h1>Welcome to the ToDos API<h1>'))
app.get('/todos', (req,res) => res.send(todos))
//if they request the home route, run this function
// '/' refers to the home port (or home route)

app.listen(port, () => console.log('TODOS API IS UP!', port))
//this above listens to the 4000 local host and when everything is working well, it will respond with this message

//Now we
