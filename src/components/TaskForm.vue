<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>Заголовок:</label>
      <input v-model="form.title" required />
    </div>
    <div>
      <label>Описание:</label>
      <textarea v-model="form.description"></textarea>
    </div>
    <div>
      <label>Приоритет:</label>
      <select v-model="form.priority">
        <option value="низкий">Низкий</option>
        <option value="средний">Средний</option>
        <option value="высокий">Высокий</option>
      </select>
    </div>
    <div>
      <label>Срок выполнения:</label>
      <input type="date" v-model="form.deadline" />
    </div>
    <div>
      <label>Статус:</label>
      <select v-model="form.status">
        <option value="новая">Новая</option>
        <option value="в работе">В работе</option>
        <option value="завершена">Завершена</option>
      </select>
    </div>
    <button type="submit">Сохранить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        priority: 'низкий',
        deadline: '',
        status: 'новая'
      }
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit-task', {...this.form, id: Date.now()});
      this.form.title = '';
      this.form.description = '';
      this.form.priority = 'низкий';
      this.form.deadline = '';
      this.form.status = 'новая';
    }
  }
};
</script>

<style scoped>
</style>