import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetching = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const setInitialStates = () => {
    setIsLoading(true);
    setData(null);
    setError(null);
  };

  const fetchData = async () => {
    try {
      setInitialStates();
      const response = await axios.get(url);
      setData(response.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetching;
