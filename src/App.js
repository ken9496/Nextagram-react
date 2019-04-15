import React from 'react';
import 'react-bootstrap';
import LoadingIcon from './components/Spinner.js'
import HomePage from './pages/HomePage';
import axios from 'axios';
import './App.css';
import { Route, Link } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import Navbar from "./components/Navbars"




class App extends React.Component {
  state = {
    users: [],
    isLoading: true,

  }

  componentDidMount() {
    // performing a GET request
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        // If successful, we do stuffs with 'result'
        console.log(result.data)
        this.setState({ users: result.data, isLoading: false })
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) return <LoadingIcon />


    return (
      <>
        <Navbar>
        </Navbar>


        <Link to='/users/:id'></Link>
        <Route path={`/users/:id`} render={props => <UserProfilePage {...props} />} />
        <Route exact path="/" component={props => <HomePage {...props} users={users} />} />


      </>
    )
  }
}

export default App;



