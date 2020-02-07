import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ListGroup, ListGroupItem, Container } from 'reactstrap'


function ListingUsers(props) {
    // console.log(props)
    return (
        <div style={{textAlign: 'center'}}>
            <Container>
            <h1> Users List </h1>
            <br />
            <ListGroup>
                {
                    props.users.map(user => {
                        return <ListGroupItem key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link> </ListGroupItem>
                    })
                }
            </ListGroup>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ListingUsers)