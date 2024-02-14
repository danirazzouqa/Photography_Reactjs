import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (username, email, password,role) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password ,role}),
      });
      
      if (!response.ok) {
        const json = await response.json();
        throw new Error(json.error); // Throw error with the message from the backend
      }

      const json = await response.json();
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      setIsLoading(false);
    } catch (error) {
      setError(error.message); // Set error message
      setIsLoading(false);
      throw error; // Re-throw error to be caught by the component
    }
  };

  return { login, isLoading, error };
};
