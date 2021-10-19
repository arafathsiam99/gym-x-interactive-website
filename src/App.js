import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Instructors from './components/Instructors/Instructors';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute exact path ="/serviceDetails/:serviceDetailsId"> 
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route exact path="/instructors">
              <Instructors></Instructors>
          </Route>
          <Route exact path="/blog">
              <Blog></Blog>
          </Route>
          <Route exact path="/login">
              <Login></Login>
          </Route>
          <Route exact path="/register">
              <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
           <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
