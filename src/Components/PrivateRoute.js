import {Navigate} from 'react-router-dom';
import { useAuth } from './Contexts/AuthContext';

export default function PrivateRoute({children}) {

    const {currentUser} = useAuth();

    return currentUser.uid ? (children) : <Navigate to={'/login'}/>
}