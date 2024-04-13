import React, { useState } from 'react';
import { TextField, Button, Container, CardContent, Card } from '@mui/material';
import { Task } from '../types';
import { createTask } from '../../services/api/tasks/helpers';

export interface TaskFormProps {
    onAddTaskSuccess: () => void;
    onAddTaskError: (error: any) => void;
}

const TaskForm = ({ onAddTaskSuccess, onAddTaskError }: TaskFormProps) => {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event: any) => {
    const value = event.target.value;
    if (value.length <= 40) {
      setTitle(value);
    }
  };

  const handleDescriptionChange = (event: any) => {
    const value = event.target.value;
    if (value.length <= 100) {
      setDescription(value);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
    const task: Task = {
        title: title,
        description: description,
        completed: false,
    }
    createTask(task)
    .then(onAddTaskSuccess)
    .catch((error) => onAddTaskError(error));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card variant="outlined">
        <CardContent>
            <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center'}}>
                <TextField
                  label="Title"
                  fullWidth
                  value={title}
                  onChange={handleTitleChange}
                  inputProps={{ maxLength: 40 }}
                />
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  value={description}
                  onChange={handleDescriptionChange}
                  sx={{mt:2}}
                  inputProps={{ maxLength: 100 }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                  Submit
                </Button>
                </div>
            </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TaskForm;
