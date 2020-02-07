import React from 'react'
import blogImg from './image/photo-1445277547562-477f4b504b7b.jpg'
import { Container } from 'reactstrap'

function Home(props) {
    return (
        <div style={{textAlign: 'center'}}>
           <div style = {{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/b/b7/Storlien_ski_area.JPG)` , width : "100%", height : "800px", textAlign: "center" }} >
               <br></br>
               <br></br>
               
               <br></br>
               <br></br>
               <br></br>
               <Container><h1 > Welcome to the Blog-UI</h1> <br />
                    <p> This website is made using a library(React along with Redux). And the designing tools used in production of this website are ReactStrap and BootStrap. And various several packages are used like axios, react-router-dom. </p>
                    <p> The data on this website is fetched using axios through a website called <a href="http://jsonplaceholder.typicode.com/">JSONPlaceholder</a>. </p>

                </Container>
           </div>
        </div>
    )
}

export default Home