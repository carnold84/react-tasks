import React, { ReactNode } from 'react';

export type Task = {
  id: string;
  notes?: string;
  subTasks?: Array<Task>;
  title: string;
};

export type State = {
  tasks: Array<Task>;
};

export type Action =
  | { type: 'add-task'; payload: Task }
  | { type: 'set-tasks'; payload: Array<Task> };

export type ProviderProps = {
  children: ReactNode;
};

export type Store = {
  state: State;
  dispatch: React.Dispatch<any>;
};
