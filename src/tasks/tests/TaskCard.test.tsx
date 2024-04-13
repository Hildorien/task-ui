import React from 'react';
import { render } from '@testing-library/react';
import TaskCard from '../components/TaskCard';
import exp from 'constants';

const taskActions = {
  onDeleteTaskSuccess: jest.fn(),
  onUpdateTaskSuccess: jest.fn(),
  onDeleteTaskError: jest.fn(),
  onUpdateTaskError: jest.fn(),
}

test('renders task card with provided task', () => {
  const task = {
    id: 1,
    title: 'Sample Task',
    description: 'This is a sample task description.',
    completed: false,
  };

  const { getByText } = render(<TaskCard task={task} taskActions={taskActions} />);

  expect(getByText('Sample Task')).toBeInTheDocument();
  expect(getByText('This is a sample task description.')).toBeInTheDocument();
});

test('renders delete and edit icon buttons', () => {
  const task = {
    id: 1,
    title: 'Sample Task',
    description: 'This is a sample task description.',
    completed: false,
  };

  const { getByLabelText } = render(<TaskCard task={task} taskActions={taskActions} />);
  const deleteIcon = getByLabelText('delete') as HTMLButtonElement;
  const editIcon = getByLabelText('edit') as HTMLButtonElement;

  expect(deleteIcon).toBeInTheDocument();
  expect(editIcon).toBeInTheDocument();
  
});

test('renders completed switch', () => {
  const task = {
    id: 1,
    title: 'Sample Task',
    description: 'This is a sample task description.',
    completed: false,
  };

  const { getByLabelText } = render(<TaskCard task={task} taskActions={taskActions} />);
  const completedSwitch = getByLabelText('Completed') as HTMLInputElement;

  expect(completedSwitch).toBeInTheDocument();
});

test('completed switch value matches task completed status', () => {
  const task = {
    id: 1,
    title: 'Sample Task',
    description: 'This is a sample task description.',
    completed: true, // Set completed to true
  };

  const { getByLabelText } = render(<TaskCard task={task} taskActions={taskActions} />);
  const completedSwitch = getByLabelText('Completed') as HTMLInputElement;

  expect(completedSwitch).toBeInTheDocument();
  expect(completedSwitch.checked).toBe(true); // Check if the switch is checked (true)
});
