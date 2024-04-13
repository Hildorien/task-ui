import React from 'react'
import { Task, TaskActions } from '../types';
import { Grid } from '@mui/material';
import TaskCard from './TaskCard';
import '../css/Tasks.css';

export interface TaskGridProps {
    tasks: Task[];
    taskActions: TaskActions

}

const TaskGrid = ({ tasks, taskActions }: TaskGridProps) => {
  return (
    <div className='TaskGrid'>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {tasks.map((task, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <TaskCard task={task} taskActions={taskActions}  />
              </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default TaskGrid;
