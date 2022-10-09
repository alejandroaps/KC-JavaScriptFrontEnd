import { pubSub } from "../pubSub.js";

export class SignupController {
    constructor(nodeElement) {
      this.signupElement = nodeElement;
  
      this.subscribeToEvents()
    }
  
    
    subscribeToEvents() {
      this.signupElement.addEventListener('submit', (event) => {
        event.preventDefault()
        this.validatePassword()
      })

      const createUserInputElements = Array.from(this.signupElement.querySelectorAll('input'))
      const createUserButtonElement = this.signupElement.querySelector('#createUserButton')
  
      createUserInputElements.forEach(createUserInputElement => {
        createUserInputElement.addEventListener('input', () => {
          const areInputsFilled = createUserInputElements.every(inputElement => inputElement.value)
          if (areInputsFilled) {
            createUserButtonElement.removeAttribute('disabled')
          } else {
            createUserButtonElement.setAttribute('disabled', '')
          }
        })
      })
    }


    
    validatePassword() {
      const passwordElement = this.signupElement.querySelector('#password')
      const minLength = 6;
      
      if (passwordElement.value.length <= minLength) {
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe tener más de ${minLength} caracteres`)
      }
  
      const regExp = new RegExp(/^[a-zA-Z0-9]*$/)
  
      if (regExp.test(passwordElement.value)) {
        
      } else {
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe contener únicamente minúsculas, mayúsculas o números`)
      }
    }
  }