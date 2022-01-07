const Modal = {
  name: 'Modal',
  props: ['close', 'curr'],
  inject: {
    remove: {
      from: 'delete',
      default: null
    },
    patch: {
      from: 'update',
      default: null
    },
  },
  setup (props) {
    console.log(JSON.parse(props.curr));
  },
  data: (props)=>{
    return {
      newTodo: {
        id: JSON.parse(props.curr).id,
        subject: JSON.parse(props.curr).subject,
        done: JSON.parse(props.curr).done,
      },
    }
  },
  methods: {
    handleCloseModal() {
      this.$emit('close');
    },
    handleSubmit(event) {
      event.preventDefault();
      try {
        this.patch(this.newTodo);
      } catch (err)  {
        console.log(err);
      }
    },
    handleChange(event) {
      this.newTodo.subject = event.target.value;
    },
    markAsDone() {
      this.newTodo.done = !this.newTodo.done;
      
      console.log(this.newTodo)
    },
    deleteTodo() {
      try {
        this.remove(this.newTodo);
     } catch (err)  {
        console.log(err);
      }
    },
  },
  template: `
    <div id="overlay">
      <div id="modal">
        <div>
          <button
            id="btn-delete"
            @click="deleteTodo"
          >delete</button>
          <span>{{ newTodo.id }}</span>
          <button
            id="btn-close"
            @click="handleCloseModal"
          >close</button>
        </div>
        <form @submit="handleSubmit">
          <input
            type="text"
            name="subject"
            :value="newTodo.subject"
            @change="handleChange"
          />
          <div id="actions">
            <button
              id="not-done"
              type="button"
              :disabled="!newTodo.done"
              @click="markAsDone"
            >Not done</button>
            <button
              id="done"
              type="button"
              :disabled="newTodo.done"
              @click="markAsDone"
            >Done</button>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  `
}

export { Modal }

/*

*/