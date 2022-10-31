import { cleanup, fireEvent, render } from '@testing-library/react';
import ToDo from '../components/ToDo';

afterEach(cleanup);

it('adds new tasks', () => {
  const { getByRole, getAllByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  expect(getAllByRole('task').length).toBe(2);
});

it('removes one task', () => {
  const { getByRole, getAllByRole, queryByText } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task 1' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task 2' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.click(getAllByRole('task')[0].childNodes[2]);

  expect(queryByText('test task 1')).toBeNull();
  expect(queryByText('test task 2')).toBeTruthy();
});

it('updates task count', () => {
  const { getByRole,getAllByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  expect(getByRole('taskCount').textContent).toBe('1 items left');

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  expect(getByRole('taskCount').textContent).toBe('2 items left');

  fireEvent.click(getAllByRole('task')[0].childNodes[2]);

  expect(getByRole('taskCount').textContent).toBe('1 items left');
});

it('completes one task', () => {
  const { getByRole, getAllByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  expect(getByRole('taskCount').textContent).toBe('2 items left');

  fireEvent.click(getAllByRole('task')[0].childNodes[0]);

  expect(getByRole('taskCount').textContent).toBe('1 items left');
});

it('completes all tasks', () => {
  const { getByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  expect(getByRole('taskCount').textContent).toBe('2 items left');

  fireEvent.click(getByRole('allCompleting'));

  expect(getByRole('taskCount').textContent).toBe('0 items left');
});

it('clears all completed tasks', () => {
  const { getByRole, getAllByRole, queryAllByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.click(getAllByRole('task')[0].childNodes[0]);
  fireEvent.click(getAllByRole('task')[1].childNodes[0]);

  fireEvent.click(getByRole('completedClearing'));

  expect(queryAllByRole('task').length).toBe(1);
});

it('shows completed tasks', () => {
  const { getByRole, getAllByRole, queryAllByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.click(getAllByRole('task')[0].childNodes[0]);

  fireEvent.click(getByRole('completedShow'));

  expect(queryAllByRole('task').length).toBe(1);
});

it('shows active tasks', () => {
  const { getByRole, getAllByRole, queryAllByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.click(getAllByRole('task')[0].childNodes[0]);

  fireEvent.click(getByRole('activeShow'));

  expect(queryAllByRole('task').length).toBe(2);
});

it('shows all tasks', () => {
  const { getByRole, getAllByRole, queryAllByRole } = render(
    <ToDo />,
  );

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.change(getByRole('toDoInput'), { target: { value: 'test task' } });
  fireEvent.submit(getByRole('toDoInput'));

  fireEvent.click(getAllByRole('task')[0].childNodes[0]);

  fireEvent.click(getByRole('allShow'));

  expect(queryAllByRole('task').length).toBe(3);
});