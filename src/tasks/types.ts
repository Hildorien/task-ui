export type Task = {
    id?: number;
    title: string;
    description: string;
    completed: boolean;
};

export interface TaskActions {
    onDeleteTaskSuccess: () => void;
    onDeleteTaskError: (error: any) => void;

    onUpdateTaskSuccess: () => void;
    onUpdateTaskError: (error: any) => void;
}