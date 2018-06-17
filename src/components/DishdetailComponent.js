import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Row, Col, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toogleModal = this.toogleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log(JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    toogleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-light" onClick={this.toogleModal}><i className="fa fa-pencil fa-lg"></i> Submit Comment </button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toogleModal}>
                    <ModalHeader toggle={this.toogleModal}>Añadir Comentario</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col>
                                    <Control.text model=".name" id="name" name="name" 
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                </Col>
                            </Row>
                            <Errors 
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Your Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        className="form-control"
                                        rows="5"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Comment
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderDish({dish}) {
    return(
        <Card>
            <CardImg className="align-self-center mr-3" width="100%" src={baseUrl + dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle> {dish.name} </CardTitle>
                <CardText> {dish.description} </CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments, postComment, dishId}){
    const comm = comments.map((comment) => {
        return(
            <div key={comment.id}>
                <li> {comment.comment} <br/> -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </li> 
                <br/>
            </div>
        );
    });

    return(
        <div>
            <h4> Comments </h4>
            <ul className="list-unstyled">
            {comm}
            </ul>
            <CommentForm dishId ={dishId} postComment={postComment}/>
        </div>
    );
}

const DishDetail = (props) => {
    if(props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMes) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMes}</h4>
                </div>
            </div>
        );
    }
    else if(props.selectedDish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.selectedDish.id}/>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div></div>
        );
    }
}

export default DishDetail;