import React,{Component} from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
            return (
              <div>
                <Nav>
                  <NavItem>
                    <NavLink tag={Link} to="/">Accueil</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/jeu1">Jeu 1</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/jeu2">Jeu 2</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/jeu3">Jeu 3</NavLink>
                  </NavItem>
                </Nav>
                <hr className="my-4" />
              </div>
            ); 
    }
}


export default Header;