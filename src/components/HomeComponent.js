import React from 'react';
import { Card, CardImg , CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

var RenderCard = ({item, isLoading, errMes}) => {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMes) {
        return(
            <h4>{errMes}</h4>
        );
    }
    else{
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading}
                    errMes={props.dishesErrMes}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                    isLoading={props.promosLoading}
                    errMes={props.promosErrMes}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;