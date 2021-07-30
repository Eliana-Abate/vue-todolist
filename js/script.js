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
            let word = this.newItem.charAt(0).toUpperCase() + this.newItem.slice(1);
            if (word && word.trim() !== '' && !this.taskList.includes(word)) {
                this.taskList.push(word);
            } else {
                alert('Hai inserito un valore non valido o già presente');
            }
            
            this.newItem = '';
        },

        cleanInput() {
            this.newItem = '';
        },

        printingAlert() {
            if (this.taskList.length) {
                alert('Stampa in corso...');
            } else {
                alert('Ops...nulla da stampare! Aggiungi qualcosa alla lista!');
            }
        },

        showIcons() {
            if (this.taskList.length) {
                const shareBtn = document.getElementById('shareBtn');
                shareBtn.classList.remove('hidden');
            } else {
                alert('Nulla da condividere! La lista è vuota!');
            }
        }
    }
});