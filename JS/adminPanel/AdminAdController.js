import { loggedActions, nonLoggedActions } from "./AdminAdview.js";

export class AdminAdController {    
   constructor(nodeElement){
        this.userActionsElement = nodeElement;

        this.setActions();
   } 

   setActions()
   {
        //En otras APIs hay endpoints para saber si el valido el token y se comprobaria, sparrest.js no lo tiene
        const token = localStorage.getItem('token'); 

        if (token) {
            loggedActions(this.userActionsElement);
          } else {
            nonLoggedActions(this.userActionsElement);
          }   
   }
}