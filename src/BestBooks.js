import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookItem from './BookItem';

//
import Button from 'react-bootstrap/Button';

import Modelbook from './Modelbook';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favBooksArr: [],
      showModel: false
    }
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      //should add heroku link to be work
      .get(`https://book-add-information.herokuapp.com/getBooks?email=${email}`)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })
  }


  addBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      ownerEmail: email
    }

    axios
      //add heroku link
      .post(`https://book-add-information.herokuapp.com/addBook`, obj)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('Error on adding data');
      })
  }


  handelShowModel = () => {
    this.setState({
      showModel: true
    })
  }

  close = () => {
    this.setState({
      showModel: false
    })
  }

  deleteBook = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      //add link
      .delete(`https://book-add-information.herokuapp.com/deleteBook/${id}?email=${email}`)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error in deleting book');
      })
  }




  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>



        <Button onClick={this.handelShowModel}> Add  </Button>

        <BookItem
        // item = {item}
          Book={this.state.favBooksArr}
          deleteBook={this.deleteBook}
        />

        <Modelbook show={this.state.showModel}
          handelShowModel={this.handelShowModel}
          addBook={this.addBook}
          close={this.close} />

        {/* <form onSubmit={this.addBook}>
          <fieldset>
            <legend>Add Book:</legend>
            <input type='text' name='title' placeholder='Book Name' />
            <input type='text' name='description' placeholder='description' />
            <input type='text' name='status' placeholder='status' />
            <button type='submit'>Add</button>
          </fieldset>
        </form>

        {this.state.favBooksArr.map(item=>{
          return(
            <BookItem 
            item = {item}
            deleteBook = {this.deleteBook}
            />
          )
        })
       } */}

      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
