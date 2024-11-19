<template>
  <div>
    <h1>Создать задачу</h1>
    <task-form @submit-task="addTask"></task-form>
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import {mapActions} from 'vuex';

export default {
  components: {
    TaskForm,
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
  },
};
</script>

<style scoped>
</style>