import React from 'react';
import { render } from '@testing-library/react';
import TaskGrid from '../components/TaskGrid';

// Mock the TaskCard component for testing purposes
jest.mock('../components/TaskCard', () => {
    return function MockTaskCard({ task }: { task: any }) {
      return <div data-testid={`task-card-${task.id}`} />;
    };
  });

test('renders TaskCard components for each task', () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
  ];

  const taskActions = {
    onDeleteTaskSuccess: jest.fn(),
    onUpdateTaskSuccess: jest.fn(),
    onDeleteTaskError: jest.fn(),
    onUpdateTaskError: jest.fn(),
  }

  const { getAllByTestId } = render(<TaskGrid tasks={tasks} taskActions={taskActions} />);
  const taskCardElements = getAllByTestId(/task-card-\d+/); // Match the data-testid pattern

  expect(taskCardElements).toHaveLength(tasks.length);
});