import { CounterStateInterface } from "../counter/types/counter-state.interface";
import { TodosStateInterface } from "../todo/types/todos-state.interface";

export interface AppStateInterface {
    counter: CounterStateInterface;
    todos: TodosStateInterface;
}