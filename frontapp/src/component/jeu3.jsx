import React,{Component} from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

class Jeu3 extends Component{
    render(){
            return (
              <div>
                <Nav>
                  <NavItem>
                    <NavLink href="#">JEU3</NavLink>
                  </NavItem>
                </Nav>
                <hr className="my-4" />
              </div>
            ); 
    }
}


export default Jeu3;