import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
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
      type: 'Alimentação',
      value: 1,
      img: 'https://i.imgur.com/ppTo7xm.png',
      date: '2020-09-19T12:59',
      location: 'Rua salvatore leão 1234',
    },
    {
      id: '2',
      name: 'Almoço restaurante 2',
      refundable: false,
      type: 'Alimentação',
      value: 2,
      date: '2020-09-19T13:00',
      location: 'Av. Passo largo 5432',
    },
    {
      id: '3',
      name: 'Almoço restaurante 3',
      refundable: true,
      type: 'Alimentação',
      value: 3,
      img: 'https://i.imgur.com/ppTo7xm.png',
      date: '1920-09-01T20:59',
      location: 'Rua Gonçalves Dias 68',
    },
    {
      id: '4',
      name: 'Deslocamento para Reunião',
      refundable: true,
      type: 'Transporte',
      value: 4,
      date: '2020-09-20T11:20',
      location: 'Rua Costa 250',
    },
    {
      id: '5',
      name: 'Deslocamento para Reunião 2',
      refundable: true,
      type: 'Transporte',
      value: 5,
      date: '2020-09-22T11:20',
      location: 'Tangamandápio, 250',
    },
  ];

  const [expenses, setExpenses] = useState(items);

  const updateExpenses = useCallback(
    (expense: ExpenseItem) => {
      console.log('Expense original ', expenses);
      console.log('UPDATE Expense', expense);
      const newExpenses = expenses.map(item => {
        if (item.id === expense.id) return { ...item, ...expense };
        return item;
      });
      setExpenses(newExpenses);
    },
    [expenses],
  );

  useEffect(() => {
    console.log('changed expenses!!!!', expenses);
  }, [expenses]);

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
