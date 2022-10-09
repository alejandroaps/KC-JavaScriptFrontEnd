export const nonLoggedActions = (nodeElement) => {

    /*
    const newlinkCreateUser = document.createElement("a");
    newlinkCreateUser.innerHTML = "Crear usuario";
    newlinkCreateUser.href="signup.html";
    nodeElement.prepend(newlinkCreateUser);*/
    const createUserLink = nodeElement.querySelector('#user-actions-signup-a');
    const createAdLink = nodeElement.querySelector('#user-actions-createAd-a');

    createUserLink.classList.remove("hide");
    createAdLink.classList.add("hide");


    const logoutButton = nodeElement.querySelector('#user-actions-logout-button');
    logoutButton.classList.add("hide");   

}

export const loggedActions = (nodeElement) => {

    const createUserLink = nodeElement.querySelector('#user-actions-signup-a');
    const createAdLink = nodeElement.querySelector('#user-actions-createAd-a');

    createUserLink.classList.add("hide");
    createAdLink.classList.remove("hide");

    const logoutButton = nodeElement.querySelector('#user-actions-logout-button');
    logoutButton.classList.remove("hide");
}