import React, { useState } from 'react';
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
} from 'reactstrap';

import Home from './Home'
import ListingUsers from './components/ListingUsers'
import User from './components/User'
import UserDetails from './components/UserDetails'

import ListingPosts from './components/ListingPosts'
import Post from './components/Post'

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Blog-UI-Redux</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/users">  Users </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/posts">  Posts </Link>
              </NavItem>
            </Nav>
            <Link style={{ color: 'black' }} className="nav-link" to="#">  Logout </Link>
          </Collapse>
        </Navbar>

        <br />

        <Route path="/" component={Home} exact={true} />
        <Route path="/users" component={ListingUsers} exact={true} />
        <Route path="/users/:id" component={User} />
        <Route path="/userDetails/:id" component={UserDetails} />

        <Route path="/posts" component={ListingPosts} exact={true} />
        <Route path="/posts/:id" component={Post} />

      </BrowserRouter>
    </div>
  )
}

export default App