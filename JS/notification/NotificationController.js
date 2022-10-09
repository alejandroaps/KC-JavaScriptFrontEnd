import { buildNotificationView } from "./Notification-view.js";
import { pubSub } from "../pubSub.js";

export class NotificationController {

  constructor(nodeElement) {
    this.notificationElement = nodeElement;

    this.subscribeToEvents()
  }

  subscribeToEvents() {
    pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (message) => {
      this.showNotification(message)
    })
  }

  showNotification(message) {
    this.notificationElement.innerHTML = buildNotificationView(message);

    // ir al dom a por el boton
    const closeButtonElement = this.notificationElement.querySelector('.notification-button-close')

    // asignarle un escucheador al evento click
    closeButtonElement.addEventListener('click', () => {
      this.notificationElement.innerHTML = ''
    })
  }
}