import { AdminAdController } from "./AdminAdController.js";

let adminAdController = null;

document.addEventListener('DOMContentLoaded', () => {
  const handleUserLogged = () => {
    const userActionsElement = document.querySelector('#user-actions')
    const logoutButton = userActionsElement.querySelector('#user-actions-logout-button');


    adminAdController = new AdminAdController(userActionsElement);
  }

  handleUserLogged();
})


const userActionsElement = document.querySelector('#user-actions');
const logoutButton = userActionsElement.querySelector('#user-actions-logout-button');

logoutButton.addEventListener('click', () => {
    const token = localStorage.getItem('token'); 

    if (token)
    {
        localStorage.removeItem('token'); 
        adminAdController.setActions();
    }
           
});