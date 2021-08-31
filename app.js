const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
            show: true
        };
    },
    computed: {
        fraseBottone() {
            if (this.show) {
                return 'Nascondi Lista';
            }
            else {
                return 'Mostra Lista';
            }
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        toggleList() {
            this.show = !this.show;
        },
        removeTask(id) {
            this.tasks.splice(id, 1);
        }
    }
});
app.mount('#app');
