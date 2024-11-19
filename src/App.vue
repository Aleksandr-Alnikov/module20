<template>
  <div id="app">
    <nav>
      <router-link to="/tasks">Мои задачи</router-link>
      <router-link to="/create">Создать задачу</router-link>
      <router-link to="/settings">Настройки</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #ccc;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
}
</style>