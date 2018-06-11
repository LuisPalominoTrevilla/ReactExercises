import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg ClassName="align-self-center mr-3" width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments != null) {
            const comm = comments.map((comment) => {
                return(
                    <div>
                        <li> {comment.comment} <br/> -- {comment.author}, {comment.daye} </li> 
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
                </div>
            );
        }else{
            return(<div></div>);
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    { this.renderDish(this.props.selectedDish) }
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments((this.props.selectedDish != null)? this.props.selectedDish.comments: null)}
                </div>
            </div>
        );
    }
}

export default DishDetail;