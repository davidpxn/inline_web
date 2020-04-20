import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
const status = require('http-status-codes');


export default function useApi(apiCall, errorMessage) {
  const history = useHistory();
  const { resetUser } = useContext(UserContext);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const fetchData = async () => {
    setLoading(true);
    setError('');

    let result = {};
    try {
      result = await apiCall();
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
    return result;
  };

  return { fetchData, data, loading, error };
}
