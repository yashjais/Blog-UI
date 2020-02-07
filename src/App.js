import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './Home'
import ListingUsers from './components/ListingUsers'
import User from './components/User'
import UserDetails from './components/UserDetails'

import ListingPosts from './components/ListingPosts'
import Post from './components/Post'

function App(props) {
    return(
        
        <div>
            <BrowserRouter>
            
              <Navbar color="light" light expand="md">
                <NavbarBrand ><Link to="/" style={{textDecoration: 'none', color: "black"}} > Blog-UI-Redux </Link> </NavbarBrand>
                <NavbarToggler />
                <Collapse  navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink  ><Link to="/users" style={{textDecoration: 'none', color: "black"}} > Users </Link></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink  ><Link to="/posts" style={{textDecoration: 'none', color: "black"}} > Posts </Link></NavLink>
                    </NavItem>
                  </Nav>
                  <NavbarText><Link to="/"> Home </Link></NavbarText>
                </Collapse>
              </Navbar>

              <br />
    
              <Route path="/" component={ Home } exact={ true } />
              <Route path="/users" component={ ListingUsers } exact={ true } />
              <Route path="/users/:id" component={ User } />
              <Route path="/userDetails/:id" component={ UserDetails } />
              
              <Route path="/posts" component={ ListingPosts } exact={ true } /> 
              <Route path="/posts/:id" component={ Post } /> 

            </BrowserRouter>
        </div>
    )
}

export default App