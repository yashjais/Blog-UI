import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Container } from 'reactstrap'

function ListingPosts(props) {
    // console.log(props)
    return (
        <div style={{textAlign: 'center'}}>
            <Container>
            <h1> Posts List </h1>
            <br />
            <ListGroup>
                {
                    props.posts.map(post => {
                        return <ListGroupItem key={post.id}> <Link to={`/posts/${post.id}`}>{post.title}</Link> </ListGroupItem>
                    })
                }
            </ListGroup>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(ListingPosts)