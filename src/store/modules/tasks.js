export default {
    namespaced: true,
    state: {
        tasks: [],
    },

    actions: {
        fetchTasks({commit}) {
            const exampleTasks = [
                {id: 1, title: "Задача 1", description: "Описание 1", priority: "высокий", deadline: "2023-12-31", status: "новая"},
            ];
            commit('setTasks', exampleTasks);
        },
        addTask({commit}, task) {
            commit('addTask', task);
        },
        deleteTask({ commit, state }, taskId) {
            const updatedTasks = state.tasks.filter(task => task.id !== taskId);
            commit('setTasks', updatedTasks);
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task);
        }
    },
};