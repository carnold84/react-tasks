import React, { ReactNode } from 'react';

export type Task = {
  done: boolean;
  id: string;
  notes?: string;
  title: string;
};

export type NewTask = {
  title: string;
};

export type UpdatedTask = {
  done?: boolean;
  id: string;
  notes?: string;
  title?: string;
};

export type EditingTask = {
  isEditing: boolean;
  task: Task;
};

export type TasksById = {
  [key: string]: Task;
};

export type State = {
  tasks: {
    allIds: Array<string>;
    byId: TasksById;
    editing: Array<EditingTask>;
  };
};

export type Action =
  | { type: 'add-task'; payload: any }
  | { type: 'delete-task'; payload: any }
  | { type: 'edit-tasks'; payload: any }
  | { type: 'set-tasks'; payload: Array<any> }
  | { type: 'update-task'; payload: any };

export type ProviderProps = {
  children: ReactNode;
};

export type Store = {
  state: State;
  dispatch: React.Dispatch<any>;
};
