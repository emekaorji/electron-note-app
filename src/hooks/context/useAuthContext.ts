import { AuthContext } from 'providers/authProvider';
import { useContext } from 'react';

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
