import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookItem from './BookItem';

//
import Button from 'react-bootstrap/Button';
import Modelbook from './Modelbook';
import UpdateBook from './UpdateBook';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favBooksArr: [],
      showModel: false,
      title: '',
      idBook: '',
      description: '',
      status: '',
      showForm: false
    }
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      //should add heroku link to be work
      .get(`https://finalbook.herokuapp.com/getBooks?email=${email}`)
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
      .post(`https://finalbook.herokuapp.com/addBook`, obj)
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
      .delete(`https://finalbook.herokuapp.com/deleteBook/${id}?email=${email}`)
      .then(result => {
        this.setState({
          favBooksArr: result.data
        })
      })
      .catch(err => {
        console.log('error in deleting book');
      })
  }



  handelupdateForm=(item)=>{
    this.setState({
      showForm: true,
      title: item.title,
      description: item.description,
      status: item.status,
      idBook: item._id
    })
  }


  updateBook=(event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      email: email,
      status: event.target.status.value

    }
    

    axios.put(`https://finalbook.herokuapp.com/updateBook/${this.state.idBook}`, obj)
      .then(result => {
        this.setState({
          favBooksArr: result.data,
          showForm: false
        })
      }).catch(error => {
        console.log('Error on Update');
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
          handelupdateForm={this.handelupdateForm}
        />

        <Modelbook show={this.state.showModel}
          handelShowModel={this.handelShowModel}
          addBook={this.addBook}
          close={this.close} />


        <UpdateBook
          show={this.state.showForm}

          close={this.close}
          title={this.state.title}
          description={this.state.description}
          status={this.state.status}
          updateBook={this.updateBook}

        />

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
