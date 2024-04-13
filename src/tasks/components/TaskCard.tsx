import React from 'react'
import { Task, TaskActions } from '../types';
import '../css/Tasks.css';
import { Box, Card, CardActions, CardContent, FormControlLabel, FormGroup, IconButton, Switch, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask, updateTask } from '../../services/api/tasks/helpers';

export interface TaskCardProps { 
    task: Task;
    taskActions: TaskActions;
}

const TaskCard = ({ task, taskActions }: TaskCardProps) => {
  
    //Handlers
    const handleDeleteTask = () => {
        if (task.id) {
            deleteTask(task.id)
                .then(taskActions.onDeleteTaskSuccess)
                .catch((error) => taskActions.onDeleteTaskError(error));
        }
    }
    const handleUpdateTask = () => {
        if (task.id) {
            updateTask(task.id)
                .then(taskActions.onUpdateTaskSuccess)
                .catch((error) => taskActions.onUpdateTaskError(error));
        }
    }
        
    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <IconButton aria-label="delete" size="small" color='error' onClick={handleDeleteTask}>
                        <DeleteIcon titleAccess='Delete' fontSize="inherit" />
                    </IconButton>
                    {/*<IconButton aria-label="edit" size="small" onClick={handleEditTask}>
                        <EditIcon titleAccess='Edit' fontSize="inherit" />
                    </IconButton>*/}
                </Box>
                <div className='TaskContent'>
                    <Typography variant='h4' >{task.title}</Typography>
                    <Typography variant='body1'>{task.description}</Typography>
                </div>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center'}}>
                <FormGroup>
                    <FormControlLabel control={<Switch checked={task.completed} onChange={handleUpdateTask} />} label="Completed" labelPlacement="bottom" />
                </FormGroup>
            </CardActions>
        </Card>
  ) 
}   

export default TaskCard;
