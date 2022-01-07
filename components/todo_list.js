import { Todo } from './todo.js';

const TodoList = {
  name: 'TodoList',
  props: ['todos'],
  components: { Todo },
  template: `
    <div class="todo-list" v-for="todo in todos">
      <Todo :key="todo.id" :todo="todo" />
    </div>
  `
}

export { TodoList }