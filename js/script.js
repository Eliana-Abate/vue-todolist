Vue.config.devtools = true;

console.log ('collegato', Vue);

const root = new Vue ({
    el: '#root',
    data: {
        taskList: [
            'Organizzare il viaggio',
            'Cambiare data del volo',
            'Fare la valigia',
            'Caricare batteria della macchina fotografica',
            'Fare la spesa',
        ],
    }
});