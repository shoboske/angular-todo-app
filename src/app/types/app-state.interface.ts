import { CounterStateInterface } from "../modules/counter/types/counter-state.interface";
import { TodosStateInterface } from "../modules/todo/types/todos-state.interface";

export interface AppStateInterface {
    counter: CounterStateInterface;
    todos: TodosStateInterface;
}