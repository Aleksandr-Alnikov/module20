import {createRouter, createWebHistory} from 'vue-router';
import MyTasks from '../views/MyTasks.vue';
import CreateTask from '../views/CreateTask.vue';
import Settings from '../views/Settings.vue';
import TaskDetails from '../views/TaskDetails.vue';

const routes = [
    {path: '/', redirect: '/tasks'},
    {path: '/tasks', component: MyTasks},
    {path: '/create', component: CreateTask},
    {path: '/settings', component: Settings},
    {path: '/tasks/:id', component: TaskDetails}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;