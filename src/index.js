//imports
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

//instancias
export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml ); //funciona solo si es un argumento
