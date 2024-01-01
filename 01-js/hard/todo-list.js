/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];

  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if ( indexOfTodo < 0 || indexOfTodo >= this.todos.length ) return null;
    return this.todos[indexOfTodo];
  }

  clear() {
    return this.todos = [];
  }

  add(todo) {
    if (!todo.length) return this.getAll();
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }

  update(indexOfTodo, updatedTodo) {
    if ( 0 > indexOfTodo || indexOfTodo >= this.todos.length) {
      return;
    }
    this.todos[indexOfTodo] =  updatedTodo;
      return this.todos;
  }
}

module.exports = Todo;
