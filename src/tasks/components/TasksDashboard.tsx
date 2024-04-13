import React, { useEffect, useMemo } from 'react'
import '../css/Tasks.css'
import { Task } from '../types'
import TaskGrid from './TaskGrid'
import { Button, CircularProgress, Typography } from '@mui/material'
import useApiFetch from '../../hooks/useApiFetch'
import { getTasks } from '../../services/api/tasks/helpers'
import TaskForm from './TaskForm'

const TasksDashboard = () => {
    
    //Import hooks
    const { data, loading, error, refresh } = useApiFetch(useMemo(() => { return () => getTasks() }, []));

    //Local state variables
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [showForm, setShowForm] = React.useState<boolean>(false);
    const [err, setErr] = React.useState<any>(null);

    //Effects
    useEffect(() => {
        if (data) {
            setTasks(data as Task[]);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            setErr(error);
        }
    }, [error]);

    //Event handlers
    const handleAddTask = () => {
        if (!showForm) {
            setShowForm(true);
        }
    }

    const handleAddTaskSuccess = async () => {
        setShowForm(false);
        await refresh();
    }

    const handleAddTaskError = (error: any) => {
        setErr(err);
    }
    
    return (
        <>
        <Typography variant='h3' mb={4} sx={{textAlign: 'center'}}>Tasks Dashboard</Typography>
        {   !loading ?
            <>
            <TaskGrid tasks={tasks} taskActions={{
                onDeleteTaskSuccess: () => {
                    refresh();
                },
                onDeleteTaskError: (error: any) => {
                    setErr(error);
                },
                onUpdateTaskSuccess: () => {
                    refresh();
                },
                onUpdateTaskError: (error: any) => {
                    setErr(error);
                }
            }} />
            <Button onClick={handleAddTask} variant="contained" color="primary" size="large" sx={{ mt: 4, mx: 'auto', display: 'block' }}>
                Add Task +
            </Button>
            </>
             :
            <div style={{textAlign: 'center'}}>
                <CircularProgress />
            </div>
        }
        {
            showForm &&
            <TaskForm 
                onAddTaskSuccess={handleAddTaskSuccess}
                onAddTaskError={handleAddTaskError} />
        }
        {
            err &&
            <Typography color='error' variant='h5' mt={4} sx={{textAlign: 'center'}}>{error.message}</Typography>
        }
        </>
    )
}

export default TasksDashboard;
