import React, { createContext, useCallback, useContext, useState } from 'react';
import { ExpenseItemComponentProps } from '../components/ExpenseItem';

export type ExpenseItem = ExpenseItemComponentProps & {
  id: string;
  date?: string;
  img?: string;
  location?: string;
};

interface ExpensesContextData {
  // addToast(message: Omit<ToastMessage, 'id'>): void;
  expenses: Array<ExpenseItem>;
  updateExpenses(expense: ExpenseItem): void;
}

const ExpensesContext = createContext<ExpensesContextData>(
  {} as ExpensesContextData,
);

const ExpensesProvider: React.FC = ({ children }) => {
  const items: Array<ExpenseItem> = [
    {
      id: '1',
      name: 'Almoço restaurante 1',
      refundable: true,
      type: 'alimentation',
      value: 30.2,
      img: 'https://i.imgur.com/ppTo7xm.png',
      date: '2020-09-19T12:59',
      location: 'Rua salvatore leão 1234',
    },
    {
      id: '2',
      name: 'Almoço restaurante 2',
      refundable: false,
      type: 'alimentation',
      value: 110,
      date: '2020-09-19T13:00',
      location: 'Av. Passo largo 5432',
    },
    {
      id: '3',
      name: 'Almoço restaurante 3',
      refundable: true,
      type: 'alimentation',
      value: 15.12,
      img: 'https://i.imgur.com/ppTo7xm.png',
      date: '1920-09-01T20:59',
      location: 'Rua Gonçalves Dias 68',
    },
    {
      id: '4',
      name: 'Deslocamento para Reunião',
      refundable: true,
      type: 'transportation',
      value: 20,
      date: '2020-09-20T11:20',
      location: 'Rua Costa 250',
    },
  ];

  const [expenses, setExpenses] = useState<ExpenseItem[]>(items);

  const updateExpenses = useCallback((expense: ExpenseItem) => {
    console.log('UPDATE Expense', expense);
    // setExpenses(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, updateExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};

function useExpenses(): ExpensesContextData {
  const context = useContext(ExpensesContext);

  if (!context) {
    throw new Error('useExpenses must be used within a ExpensesProvider');
  }

  return context;
}

export { ExpensesProvider, useExpenses };
