const Form = {
  name: 'Form',
  data: () => ({
    todo: '',
  }),
  inject: {
    createTodo: {
      from: 'create',
      default: null
    }
  },
  methods: {
    handleChange(ev) {
      const value = ev.target.value;
      
      if (value.trim() !== '') {
        document
         .querySelector('input[type=text]')
         .style
         .border = '1px solid var(--grey-dark)';
      }
      
      this.todo = value;
      return;
    },
    handleSubmit(ev) {
      ev.preventDefault();
      
      if (this.todo.trim() === '') {
        document
          .querySelector('input[type=text]')
          .style
          .border = '2px dashed #ff0000';
        return
      };
      
      this.createTodo(this.todo);
      this.todo = '';
      return;
    }
  },
  template: `
    <form action="#" @submit="handleSubmit">
      <input
        type="text"
        name="todo"
        :value="todo"
        @change="handleChange"
      />
      <button type="submit">
        <span>Upload</span>
      </button>
    </form>
  `
}

export { Form }