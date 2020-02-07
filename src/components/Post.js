import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Container } from 'reactstrap'

function Post(props) {
    // console.log(props)
    return (
        <div style={{textAlign: 'center'}}>
            <Container>
            <h1> Title - {props.post && props.post.title} </h1>
            <h3> Body - {props.post && props.post.body} </h3>
            <br />
            <p> Comments on this Post </p>
            <ListGroup>
                {
                    props.comments.map(comment => {
                        return <ListGroupItem key={comment.id}> {comment.body} </ListGroupItem>
                    })
                }
            </ListGroup>
            </Container>
            <br />
            <h6> Written By - <Link to={`/users/${props.user && props.user.id}`}>{props.user && props.user.name}</Link>  </h6>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    // console.log('here', props)
    return {
        //users: state.users,
        //posts: state.users.find(posts => posts.id == props.match.params.id),
        post: state.posts.find(post => post.id == props.match.params.id),
        user: state.users.find(user => user.id == ((state.posts.find(post => post.id == props.match.params.id)) && state.posts.find(post => post.id == props.match.params.id).userId)),
        comments: state.comments.filter(comment => comment.postId == props.match.params.id)
    }
}

export default connect(mapStateToProps)(Post)