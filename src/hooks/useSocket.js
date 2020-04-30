import { useRef, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import io from 'socket.io-client';

const url = process.env.REACT_APP_API_URL;


export default function useSocket(deps, eventListeners) {
  const history = useHistory();
  const socket = useRef(null);
  const { resetUser } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [branchData, setBranchData] = useState({});


  useEffect(() => {
    setLoading(true);

    socket.current = io(url);
    socket.current.on('connect', () => {
      console.info('Connected to socket');
    });

    socket.current.on('error', (error) => {
      console.error(error);
      resetUser();
      history.replace('/');
    });

    socket.current.on('initial', (initialData) => {
      setBranchData(initialData);
      setLoading(false);
    });

    if (eventListeners) {
      for (const listener of eventListeners) {
        socket.current.on(listener.event, listener.callback);
      }
    }
  }, deps);


  return {
    socket: socket.current,
    loading,
    setLoading,
    error,
    setError,
    branchData,
    setBranchData
  };
}
