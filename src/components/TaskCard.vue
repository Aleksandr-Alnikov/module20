<template>
  <div class="task-card">
    <h3>{{task.title}}</h3>
    <p>{{task.description}}</p>
    <small>Приоритет: {{task.priority}}</small> |
    <small>Срок: {{task.deadline}}</small> |
    <small>Статус: {{task.status}}</small>
    <button @click="$emit('delete-task', task.id)">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>