import React, { useContext } from 'react';

import './Branches.scss';

import useApiEffect from '../../../hooks/useApiEffect';
import { UserContext } from '../../../contexts/UserContext';

function Branches() {
  const { getUser } = useContext(UserContext);
  const { data, loading, error } = useApiEffect(getUser, "Error while loading the portal", []);

  return (
    null
  );
}


export default Branches;
