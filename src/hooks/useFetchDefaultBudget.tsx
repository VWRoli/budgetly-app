import { useEffect, useState } from 'react';
import * as api from '../api';
import { budgetType } from '../types/budgetType';

export const useFetchDefaultBudget = () => {
  //Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Error state
  const [isError, setIsError] = useState(false);

  const [defaultBudget, setDefaultBudget] = useState<null | budgetType>(null);

  const fetchBudget = async () => {
    setIsLoading(true);
    try {
      const profile = await api.getProfile();
      const budget = await api.getBudget(profile.data.defaultBudget);

      setDefaultBudget(budget.data);

      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBudget();
  }, []);
  return { defaultBudget, isLoading, isError };
};
