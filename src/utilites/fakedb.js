// use local storage to manage cart data
const addToDb = (todo) => {
  let todos = getTodos();
  let newTodos = [];
  if (todo.length === 0) {
    todos = todo;
  } else {
    newTodos = [...todos, todo];
    todos = newTodos;
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
};

const removeSingleTodo = (id) => {
  const todos = getTodos();
  // filter out the item to be removed
  const newTodos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todo-list", JSON.stringify(newTodos));
};

const getTodos = () => {
  const storedTodo = JSON.parse(localStorage.getItem("todo-list")) || [];
  return storedTodo;
};

const deleteAllTodos = () => {
  localStorage.removeItem("todo-list");
};
const updatedTodosDB = (todos) => {
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

export {
  addToDb,
  removeSingleTodo ,
  getTodos ,
  deleteAllTodos ,
  updatedTodosDB  ,
};
