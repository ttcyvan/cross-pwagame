import React,{Component} from "react";
import { Jumbotron, Button,Form, FormGroup,Input,Label } from 'reactstrap';
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:4242/");

class Pseudo extends Component{
    state= {
    };
    
    handlePseudoChange = (e) =>{
        e.preventDefault();
        this.setState({pseudo: e.target.value});
     }
    
     SendData = (e:any)=>{
         e.preventDefault();
         console.log('this.state.pseudo:', this.state.pseudo)
         if(this.state.pseudo === undefined){
             alert("champs vide")
         }else{
            window.location = "/jeu1";
          socket.on('message', (message)=>{
             alert('Le serveur a un message pour vous : ' + message);
         })
          socket.emit("deconnection", this.state.pseudo);
        }
     }
     

    render(){
            return (
                <div>
                <Jumbotron>
                  <h1 className="display-3">Bienvenue !</h1>
                  <Form>
                      <FormGroup>
                          <Label for="exampleEmail">Ton pseudo</Label>
                             <Input type="text" name="pseudo" id="pseudoname" placeholder="navchic" value={this.state.pseudo} onChange={this.handlePseudoChange}/>
                             <hr/>
                             <Button className="diasble" color="primary" onClick={this.SendData}>Envoyer</Button>
                      </FormGroup>
                  </Form>
                </Jumbotron>
              </div>
            ); 
    }
}

export default Pseudo;