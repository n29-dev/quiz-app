import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from  './Components/Layout';
import Home from './Components/Pages/Home';
import Signup from './Components/Pages/Signup';
import Quiz from './Components/Pages/Quiz';
import Login from './Components/Pages/Login';
import Result from './Components/Pages/Resullt';
import { AuthProvider } from './Components/Contexts/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

function App() {
  return (
    <div>
      <Router>
      <AuthProvider>
      <Layout>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={
        <PublicRoute>
          <Signup/>
        </PublicRoute>
        }/>
        <Route path="/quiz/:id" element={
          <PrivateRoute>
            <Quiz/>
          </PrivateRoute>
        }/>
        <Route path="/login" element={
        <PublicRoute>
          <Login/>
        </PublicRoute>
        }/>
        <Route path="/result/:id" element={
          <PrivateRoute>
          <Result/>
        </PrivateRoute>
        }/>
        </Routes>
      </Layout>
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
