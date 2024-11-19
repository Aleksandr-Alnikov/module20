<template>
  <div v-if="task">
    <h2>Детали задачи</h2>
    <p><strong>Заголовок:</strong> {{ task.title }}</p>
    <p><strong>Описание:</strong> {{ task.description }}</p>
    <p><strong>Приоритет:</strong> {{ task.priority }}</p>
    <p><strong>Срок выполнения:</strong> {{ task.deadline }}</p>
    <p><strong>Статус:</strong> {{ task.status }}</p>
  </div>
  <div v-else>
    <p>Загрузка данных задачи...</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  name: "TaskDetails",
  computed: {
    ...mapState('tasks', {
      taskList: state => state.tasks
    }),
    task() {
      const taskId = parseInt(this.route.params.id);
      return this.taskList.find(task => task.id === taskId);
    }
  },
  methods: {
    ...mapActions('tasks', ['fetchTasks'])
  },
  created() {
    if (this.taskList.length === 0) {
      this.fetchTasks();  // Загрузка данных, если они еще не загружены
    }
  },
  setup() {
    const route = useRoute();
    return { route };
  }
};
</script>

<style scoped>
h2 {
  color: #333;
}
p {
  margin: 10px 0;
}
</style>