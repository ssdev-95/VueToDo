const Todo = {
  props: ['todo'],
  inject: {
    injectedToggle: {
      from: 'toggle',
      default: null
    },
  },
  data: ()=>({
    done: false,
  }),
  methods: {
    openModal() {
      this.injectedToggle(this?.todo);
    }
  },
  template: `
    <div
      class="todo"
      :class="{ 'done': todo.done }"
      @click="openModal"
    >
      <h2>{{ todo.subject }}</h2>
      <p>{{ todo.id }}</p>
      <button>
        <img
          src="../assets/enter-room.png"
          alt="delete todo"
        />
      </button>
      <span v-if="done">DONE</span>
    </div>
  `
}

export { Todo };