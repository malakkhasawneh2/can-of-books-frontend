import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookItem.css';

class BookItem extends React.Component {
  render() {
    return (

      <div className='bookItem'>

        <Row xs={1} md={3} className="g-4">
          {this.props.Book.map(item =>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title> {item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                    {item.email}

                    {item.status}
                  </Card.Text>

                </Card.Body>
                <Button variant="primary" onClick={() => this.props.deleteBook(item._id)}> Delete</Button>
              </Card>
            </Col>
          )}</Row>




        {/* <p>{this.props.item.title}</p>
          <p>{this.props.item.description}</p>
          <p>{this.props.item.status}</p>

          <button onClick={() => this.props.deleteBook(this.props.item._id)}>Delete</button> */}
      </div>
    )
  }
}








{/* <div>
  
         
         <Carousel width='20%'>
               {this.props.Book.map((item,key)=>
               
                 <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={item.imgUrl}
                   alt="First slide"
                
                   width='5%'
                    height= '400px'
                 />
                 <Carousel.Caption>
                   <h3>{item.title}</h3>
                   <p>{item.description}</p>
                   <p>{item.email}</p>
                   <p>{item.status}</p>
                 </Carousel.Caption>
                
               </Carousel.Item>
             
 
               )}
         
          </Carousel>
          </div> */}
//      )
//  }
//  }//             <>

//                 {/* <p>{this.props.item.title}</p>
//                 <img src={this.props.item.imgUrl} />
//                 <p>{this.props.item.description}</p>
//                 <p>{this.props.item.status}</p>
//  */}
// {/* 
//                 <p>{this.props.item.title1}</p>
//                 <img src={this.props.item.imgUrl1} />
//                 <p>{this.props.item.description1}</p>
//                 <p>{this.props.item.status1}</p> */}

//                 {/* <p>{this.props.item.title2}</p>
//                 <img src={this.props.item.imgUrl2} />
//                 <p>{this.props.item.description2}</p>
//                 <p>{this.props.item.status2}</p> 
//  */}
//                 {/* <p>{this.props.item.title3}</p>
//                 <img src={this.props.item.imgUrl3} />
//                 <p>{this.props.item.description3}</p>
//                 <p>{this.props.item.status3}</p>
//  */}
//                 <Carousel>
//                     <Carousel.Item>
//                         <Carousel.Caption>
//                             <h3>First slide </h3>
//                             <p>{this.props.item.title2}</p>
//                             <p>{this.props.item.description2}</p>
//                             <p>{this.props.item.status2}</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                             className="d-block w-100"
//                             src={this.props.item.imgUrl2}
//                             alt="Second slide"
//                         />

//                         <Carousel.Caption>
//                             <h3>Second slide</h3>
//                             <p>{this.props.item.title3}</p>
//                             <p>{this.props.item.description3}</p>
//                             <p>{this.props.item.status3}</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img
//                             className="d-block w-100"
//                             src={this.props.item.imgUrl3}
//                             alt="Third slide"
//                         />

//                         <Carousel.Caption>
//                             <h3>Third slide</h3>

//                             <p>{this.props.item.title1}</p>
//                             <p>{this.props.item.description1}</p>
//                             <p>{this.props.item.status1}</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={this.props.item.imgUrl1}
//                         alt="Third slide"
//                     />

//                 </Carousel>

//             </>
//         )
//     }
// }




export default BookItem;