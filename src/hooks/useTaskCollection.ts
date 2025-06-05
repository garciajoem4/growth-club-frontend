import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    SEGMENT: [
      {
        id: uuidv4(),
        column: ColumnType.SEGMENT,
        title: 'Task 1',
        color: 'blue.300',
      },
    ],
    JOBS: [
      {
        id: uuidv4(),
        column: ColumnType.JOBS,
        title: 'Task 2',
        color: 'yellow.300',
      },
    ],
    PAINS: [
      {
        id: uuidv4(),
        column: ColumnType.PAINS,
        title: 'Task 3',
        color: 'red.300',
      },
    ],
    GAINS: [
      {
        id: uuidv4(),
        column: ColumnType.GAINS,
        title: 'Task 4',
        color: 'green.300',
      },
    ],
  });
}

export default useTaskCollection;
