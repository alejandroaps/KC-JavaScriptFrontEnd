import { AccountPanelController } from "./accountPanelController.js";

let accountPanelController = null;

document.addEventListener('DOMContentLoaded', () => {
  const handleUserLogged = () => {
    const userActionsElement = document.querySelector('#user-actions')
    const logoutButton = userActionsElement.querySelector('#user-actions-logout-button');


    accountPanelController = new AccountPanelController(userActionsElement);
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
        accountPanelController.setActions();
    }
           
});