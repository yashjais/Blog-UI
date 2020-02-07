import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ListGroup, ListGroupItem, Container } from 'reactstrap'

function User(props) {
    // console.log(props)
    return (
        <div style={{textAlign: 'center'}}>
            <Container>
            <h1> {props.user && props.user.name} </h1>
            <br />
            <p> Posts By the User</p>
            <ListGroup>
                {
                    props.posts.map(post => {
                        return <ListGroupItem key={post.id}> <Link to={`/posts/${post.id}`}>{post.title}</Link> </ListGroupItem>
                    })
                }
            </ListGroup>
            </Container>
            <br />
            <h6> Details of - <Link to={`/userDetails/${props.user && props.user.id}`}>{props.user && props.user.name}</Link>  </h6>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users,
        user: state.users.find(user => user.id == props.match.params.id),
        posts: state.posts.filter(posts => posts.userId == props.match.params.id)
    }
}

export default connect(mapStateToProps)(User)