import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const useAuth = (): boolean => {
  const [cookies] = useCookies(['Authentication']);
  const [authorizedStatus, setAuthorizedStatus] = useState(false);

  useEffect(() => {
    if (cookies['Authentication'] && cookies['Authentication'].length > 0) {
      setAuthorizedStatus(true);
    } else {
      setAuthorizedStatus(false);
    }
  }, [cookies]);
  return authorizedStatus;
};
