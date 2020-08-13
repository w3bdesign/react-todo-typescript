import { Action } from 'easy-peasy';

export type BodyRender = {
    value: number;
    tableMeta: { rowIndex: number };
  };

export type Store =
  {
    items: ({
        name: string;
        options: {
            filter: boolean;
            customBodyRender: ({ value, tableMeta }: BodyRender) => JSX.Element;
        };
    })[];
    // addTodo: Action<{}, any>;
    // completeTodo: Action<{}, any>;
    // deleteTodo: Action<{}, any>;
  }
