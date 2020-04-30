import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import status from 'http-status-codes';


export default function useApiEffect(apiCall, errorMessage, deps) {
  const history = useHistory();
  const { resetUser } = useContext(UserContext);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await apiCall();
        if (result.ok) {
          setData(result.data);
        } else if (result.status === status.UNAUTHORIZED) {
          resetUser();
          return history.replace('/');
        }
      } catch (e) {
        setError(errorMessage);
        setShowAlert(true);
      }

      setLoading(false);
    };

    fetchData();
  }, deps);


  return { data, loading, error, showAlert, setShowAlert };
}
