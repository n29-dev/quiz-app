import {Navigate} from 'react-router-dom';

import { useAuth } from './Contexts/AuthContext';

export default function PublicRoute({children}) {

    const {currentUser} = useAuth();

    return currentUser.uid ? <Navigate to={'/'}/>: (children);
}