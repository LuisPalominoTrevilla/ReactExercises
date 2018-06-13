import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({dish}) {
    return(
        <Card>
            <CardImg className="align-self-center mr-3" width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle> {dish.name} </CardTitle>
                <CardText> {dish.description} </CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}){
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
        </div>
    );
}

const DishDetail = (props) => {
    if(props.selectedDish != null) {
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
                        <RenderComments comments={props.comments}/>
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