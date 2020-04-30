import { useRef, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import io from 'socket.io-client';

const url = process.env.REACT_APP_API_URL;


export default function useSocket(deps) {
  const history = useHistory();
  const socket = useRef(null);
  const { resetUser } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    setLoading(true);

    socket.current = io(url);
    socket.current.on('connect', () => {
      console.info('Connected to socket');
      setLoading(false);
    });

    socket.current.on('error', (error) => {
      console.error(error);
      setLoading(false);
      setError('Please log in again')

      resetUser();
      history.replace('/');
    });
  }, deps);


  return {
    socket: socket.current,
    loading,
    setLoading,
    error,
    setError,
  };
}
