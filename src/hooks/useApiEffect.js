import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
const status = require('http-status-codes');


export default function useApiEffect(apiCall, errorMessage, deps) {
  const history = useHistory();
  const { resetUser } = useContext(UserContext);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const result = await apiCall();
        if (result.ok) {
          setData(result.data);
        } else if (result.status === status.UNAUTHORIZED) {
          resetUser();
          history.replace('/');
        }
      } catch (e) {
        setError(errorMessage);
      }

      setLoading(false);
    };

    fetchData();
  }, deps);


  return { data, loading, error };
}
