import { Task } from "../../../tasks/types";
import Api from "../api";

export function getTasks() {
    const baseUrl = '/tasks';
    return Api.getInstance().get(`${baseUrl}`, {});
}

export function createTask(task: Task) {
    const baseUrl = '/tasks';
    return Api.getInstance().create(`${baseUrl}`, task);
}

export function deleteTask(id: number) {
    const baseUrl = '/tasks/' + id.toString();
    return Api.getInstance().delete(`${baseUrl}`, {});
}

export function updateTask(id: number) {
    const baseUrl = '/tasks/' + id.toString();
    return Api.getInstance().update(`${baseUrl}`, {});
}