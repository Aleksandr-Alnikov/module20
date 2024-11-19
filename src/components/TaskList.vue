<template>
  <div>
    <task-card
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="$emit('delete-task', task.id)"
    />
  </div>
</template>

<script>
import TaskCard from './TaskCard.vue';

export default {
  components: {
    TaskCard,
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>