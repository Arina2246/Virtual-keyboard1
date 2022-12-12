import { BUTTONS_LABEL } from '../../constants/buttonsLabel.js';
import ButtonInput from './buttons/buttonInput.js';
import Animation from './animation.js';

class Keyboard {
  buttonInput: ButtonInput;
  animation: Animation;

  constructor() {
    this.buttonInput = new ButtonInput();
    this.animation = new Animation();
  }
  addKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    document.querySelector('body')?.append(keyboard);
    for (let i = 0; i < 64; i++) {
      const button = document.createElement('div');
      button.className = `button ${BUTTONS_LABEL[i]}`;
      keyboard.append(button);
    }
    this.addMouseClickListeners(keyboard, true);
    this.addMouseClickListeners(keyboard, false);
    this.addKeyboardClickListeners(true);
    this.addKeyboardClickListeners(false);
  }

  addMouseClickListeners(container: HTMLDivElement, eventAnimation: boolean) {
    let action = '';
    eventAnimation ? (action = 'mousedown') : (action = 'mouseup');
    container.addEventListener(action, (event) => {
      const clickedButton = event.target as Element;
      if (clickedButton.classList.contains('button')) {
        this.animation.addAnimation(clickedButton, eventAnimation);
        this.buttonInput.addInputText(clickedButton, eventAnimation);
      }
      this.animation.addFocusTextArea();
    });
  }

  addKeyboardClickListeners(eventAnimation: boolean) {
    let action = '';
    eventAnimation ? (action = 'keydown') : (action = 'keyup');
    window.addEventListener(action, (event) => {
      event.preventDefault();
      const e = event as KeyboardEvent;
      const buttons = document.querySelectorAll('.button');
      const clickedButton = e.code;
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains(clickedButton)) {
          this.animation.addAnimation(buttons[i], eventAnimation);
          this.buttonInput.addInputText(buttons[i], eventAnimation);
        }
      }
      this.animation.addFocusTextArea();
    });
  }
}
export default Keyboard;
