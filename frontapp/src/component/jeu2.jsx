import React,{Component} from "react";
import {Jumbotron, Button,Form, FormGroup,Input,Label } from 'reactstrap';

const random = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }

class Jeu2 extends Component{
  state= {
    nbrpoint : 0,
    nbrchance :3,
  };

  handlenbrChange = (e) =>{
    e.preventDefault();
    this.setState({nbr: e.target.value});
 }

 SendNbr = (e)=>{
     e.preventDefault();
     let value = random(1,2);
     let nbrParse = parseInt(this.state.nbr)
if(this.state.nbrchance !== 0){
     if(nbrParse === undefined){ 
         alert("champs vide") 
     }else if(nbrParse !== value){
            alert("Vous avez perdu")
      this.setState({ nbrchance: this.state.nbrchance - 1 })
      
     }else if(nbrParse === value){
      this.setState({ nbrpoint: this.state.nbrpoint + 3 })
            alert("Gagner");
            window.location = "/jeu2";
     }
     console.log('this.state.nbr:', this.state.nbr)
 }else{
   alert("fin du jeu")
   window.location = "/";
 }

}
    render(){
            return (
              <div>
                 <Jumbotron>
                  <h1 className="display-3">QuickWord!</h1>
                  <Form>
                      <FormGroup>
                          <Label for="exampleEmail">Saisir un nombre entre 1 et 1337</Label>
                             <Input type="text" name="nbr" id="nbrname" placeholder="33" value={this.state.nbr} onChange={this.handlenbrChange}/>
                             <hr/>
                                <Label for="exampleEmail">Nonbre de point : {this.state.nbrpoint}</Label>
                             <hr/>
                             <Label for="exampleEmail">Nonbre de chance : {this.state.nbrchance}</Label>
                             <hr/>
                             <Button className="diasble" color="primary" onClick={this.SendNbr}>Envoyer</Button>
                             
                      </FormGroup>
                  </Form>
                </Jumbotron>
              </div>
            ); 
    }
}


export default Jeu2;