export interface TodosStateInterface {
    isLoading: boolean;
    todos: TodoInterface[];
    error: string | null;
}

export interface TodoInterface {
    id: number;
    title: string;
    completed: boolean;
}