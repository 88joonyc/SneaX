import React, { useState, useEffect} from 'react';
import {useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginPage/LoginForm';
import SignUpForm from './components/SignUp/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Home from './components/HomePage/Home'
import SneaxDetails from './components/SneaxDetails/SneaxDetails';
import TestingWatch from './components/HomePage/TestingWatch';
import CrudTesting from './components/HomePage/CrudTesting';

function App() {
  const sessionUser = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        {/* <Route path='/' exact={true} >
          <Home />
        </Route> */}
        <Route path='/' exact={true} >
          <Home />
        </Route>
        <Route path='/sneax/:id' exact={true}>
          <SneaxDetails />
        </Route>
        <Route path='/testingWatch' exact={true}>
          <TestingWatch/>
        </Route>
        <Route path='/CrudTesting' exact={true}>
          <CrudTesting/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
