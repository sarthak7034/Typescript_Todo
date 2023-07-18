import { FetchToDosAction, DeleteTodoAction } from "./todo";

export enum ActionTypes{
    fetchTodos,
    deleteTodo
}

export type Action =  FetchToDosAction | DeleteTodoAction

