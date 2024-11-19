<template>
  <div>
    <h1>Мои задачи</h1>
    <task-list :tasks="tasks" @delete-task="deleteTask"></task-list>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import TaskList from '../components/TaskList.vue';

export default {
  components: {
    TaskList,
  },
  computed: {
    ...mapState('tasks', ['tasks']),
  },
  methods: {
    ...mapActions('tasks', ['deleteTask', 'fetchTasks']),
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
</style>