import { BUTTONS_LABEL } from '../../constants/buttonsLabel.js';

class Keyboard {
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
      if (clickedButton.className.indexOf('button') !== -1) {
        this.addAnimation(clickedButton, eventAnimation);
      }
    });
  }

  addKeyboardClickListeners(eventAnimation: boolean) {
    let action = '';
    eventAnimation ? (action = 'keydown') : (action = 'keyup');
    window.addEventListener(action, (event) => {
      const e = event as KeyboardEvent;
      const buttons = document.querySelectorAll('.button');
      const clickedButton = e.code;
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].className.indexOf(clickedButton) !== -1) {
          this.addAnimation(buttons[i], eventAnimation);
        }
      }
    });
  }

  addAnimation(button: Element, action: Boolean) {
    const activeCapsLock = button.className.indexOf('CapsLock') !== -1;
    if (activeCapsLock && action) {
      button.classList.toggle('activeButton');
    } else if (!activeCapsLock && action) {
      button.classList.add('activeButton');
    } else if (!activeCapsLock && !action) {
      button.classList.remove('activeButton');
    }
  }
}
export default Keyboard;
