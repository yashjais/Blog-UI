import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Media } from 'reactstrap';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

function UserDetails(props) {
    // console.log(props)
    return (
        <div style={{textAlign: 'center'}}>
            <Container>
                <Card>
                    <CardBody>
                    <Media>
                        <Media left href="#">
                            <Media object src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Generic placeholder image" style= {{borderRadius:"50%", width : "100px", height : "100px"}} />
                        </Media>
                        <Media body>
                            <Media heading>
                                <CardTitle><h1> {props.user && props.user.name} </h1></CardTitle>
                            </Media>
                                <CardSubtitle><h3> User Name - {props.user && props.user.username} </h3>
                                <CardSubtitle><h3> Address - {props.user && (props.user.address.street)} </h3></CardSubtitle>
                                <CardSubtitle><h3> Zipcode - {props.user && props.user.address.zipcode} </h3></CardSubtitle>
                                <CardSubtitle><h3> City - {props.user && (props.user.address.city)} </h3></CardSubtitle>
                                <CardSubtitle><h3> Website - {props.user && props.user.website} </h3></CardSubtitle>
                                <CardSubtitle><h3> Company - {props.user && props.user.company.name} </h3></CardSubtitle></CardSubtitle>
                                <Button><Link to={`/users/${props.user && props.user.id}`}>back</Link></Button>
                        </Media>
                    </Media>
                    <br />
                    </CardBody>
                </Card>  
            </Container>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserDetails)