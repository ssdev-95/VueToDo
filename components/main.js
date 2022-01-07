import { Form } from './form.js';
import { TodoList } from './todo_list.js';
import { Modal } from './modal.js';

const App = {
  name: 'Home',
  components: { Form, TodoList, Modal },
  data: ()=>({
    current: {
      id: '',
      subject: '',
      done: false,
    },
    todos: [],
    isModalOpen: false,
  }),
  provide() {
    return {
      create: this.createTodo,
      delete: this.deleteTodo,
      update: this.updateTodo,
      toggle: this.toggleModal,
      //updating: this.current
    }
  },
  methods: {
    toggleModal(todo) {
      try {
        this.current = !todo ? {} : todo;
        this.isModalOpen = !this.isModalOpen;
      } catch (err) {
        console.log(err);
      }
    },
    createTodo(subject) {
      const todo = {
        subject,
        id: Date.now(),
        done: false
      }

      this.todos = [...this.todos, todo];
    },
    deleteTodo(to_delete) {
      const todos = [...this.todos];
      
      this.todos = todos.filter(
        todo => to_delete.id !== todo.id
      )
      
      this.toggleModal()
    },
    updateTodo(updated) {
      const todos = [...this.todos];
      
      this.todos = todos.map(todo => {
        if (todo.id === updated.id) return updated;
        return todo;
      });
      
      this.toggleModal()
    },
  },
  template: `
    <Modal
      v-if="isModalOpen"
      @close="toggleModal"
      :curr="JSON.stringify(current)"
    />
    <Form />
    <TodoList :todos="todos" />
  `
}

Vue.createApp(App).mount('#content');