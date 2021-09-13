import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookItem from './BookItem';


class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      favBooksArr : []
    }
  }

  componentDidMount = () =>{
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .get(`http://localhost:3010/getBooks?email=${email}`)
    .then( result =>{
      this.setState({
        favBooksArr:result.data
      })
    })
    .catch (err =>{
      console.log('error');
    })
  }

  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.favBooksArr.map(item=>{
          return(
            <BookItem 
            item = {item}
            />
          )
        })
       }
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
