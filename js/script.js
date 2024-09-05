/*
Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente
(se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento!
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            // Array dei todo
            todos: [
                { id: 1, text: 'Comprare il pane', done: false, priority: 'mid-priority' },
                { id: 2, text: 'Comprare il cocomero', done: true, priority: 'high-priority' },
                { id: 3, text: 'Studiare Vue.js', done: false, priority: 'low-priority' },
                { id: 4, text: 'Ordinare un lanciafiamme', done: true, priority: 'high-priority' },
                { id: 5, text: 'Spegnere il sole', done: true, priority: 'mid-priority' },
                { id: 6, text: 'Superare la velocità della luce', done: false, priority: 'low-priority' }
            ],

            // Variabile per il nuovo todo
            newTodoText: '',
            // Filtro selezionato
            filter: 'all',
            // Contatore per l'id ( partendo dall'id successivo al più alto presente nell'array )
            nextTodoId: 7,
            // Aggiungo la priorità del todo
            newTodoPriority: 'low-priority',
        };
    },
    computed: {
        // Creo una funzione che restituisce i todo filtrati in base al filtro selezionato
        filteredTodos() {
            if (this.filter === 'active') {
                return this.todos.filter(todo => !todo.done);
            } else if (this.filter === 'completed') {
                return this.todos.filter(todo => todo.done);
            }
            return this.todos;
        },
        // Creo una funzione che conta i todo che non sono stati ancora completati
        remainingTodos() {
            return this.todos.filter(todo => !todo.done).length;
        }
    },
    methods: {
        // Funzione per ottenere la classe corretta in base alla priorità
        priorityClass(priority) {
            if (priority === 'high-priority') return 'text-bg-danger';
            if (priority === 'mid-priority') return 'text-bg-warning';
            if (priority === 'low-priority') return 'text-bg-success';
            return '';
        },
        // Funzione per rimuovere il todo
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        // Funzione per aggiungere un nuovo todo
        addTodo() {
            if (this.newTodoText.trim() !== '') {
                // Aggiungo il nuovo todo con un id incrementale
                this.todos.push({
                    id: this.nextTodoId++,
                    text: this.newTodoText,
                    done: false,
                    priority: this.newTodoPriority
                });
                // Resetto il campo input e priorità
                this.newTodoText = '';
                this.newTodoPriority = 'low-priority';
            }
        },
        // Funzione per invertire il valore di done
        toggleDone(todo) {
            todo.done = !todo.done;
        }
    }
}).mount('#app');



//Abbiamo utilizzato il todo.text come key, ma se due todo avessero lo stesso testo, ciò potrebbe causare problemi. Quindi aggiungerò un identificatore univoco( un id ) per ogni todo, così da avere maggiore sicurezza.

//!ESERCIZIO FINITO