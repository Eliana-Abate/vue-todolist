Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root',
    data: {
        newItem: '',
        taskList: [
            'Organizzare il viaggio',
            'Cambiare data del volo',
            'Fare la valigia',
            'Caricare batteria della macchina fotografica',
            'Fare la spesa',
        ],
    },

    methods: {
        deleteTask(i) {
            this.taskList.splice(i, 1);
        }, 

        addTask() {
            if (this.newItem && this.newItem.trim() !== '') {
                this.taskList.push(this.newItem);
            } 
            
            this.newItem = '';
        }
    }
});