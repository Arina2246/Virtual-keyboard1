import SpecButtons from './specButtons.js';
import {
  DELETE,
  TAB,
  BACKSPACE,
  ENTER,
  CAPS_LOCK,
  SHIFT_LEFT,
  SHIFT_RIGHT,
  ALT_LEFT,
  ALT_RIGHT,
  CONTRIL_LEFT,
  CONTROL_RIGHT,
  META_LEFT,
} from '../../../constants/specButtons.js';
class ButtonInput {
  specButtons: SpecButtons;
  constructor() {
    this.specButtons = new SpecButtons();
  }

  addInputText(button: Element, action: boolean) {
    const inputText = document.querySelector('textarea') as HTMLTextAreaElement;
    const buttonClassList = button.classList;
    if (buttonClassList.contains(TAB)) {
      this.specButtons.clickTab(action);
    } else if (buttonClassList.contains(DELETE)) {
      this.specButtons.clickDelete(action);
    } else if (buttonClassList.contains(BACKSPACE)) {
      this.specButtons.clickBackspace(action);
    } else if (buttonClassList.contains(ENTER)) {
      this.specButtons.clickEnter(action);
    } else if (buttonClassList.contains(CAPS_LOCK)) {
      this.specButtons.clickCapsLock(action);
    } else if (
      buttonClassList.contains(SHIFT_LEFT) ||
      buttonClassList.contains(SHIFT_RIGHT)
    ) {
      this.specButtons.clickShift(action);
    } else if (
      buttonClassList.contains(ALT_LEFT) ||
      buttonClassList.contains(ALT_RIGHT)
    ) {
      this.specButtons.clickAlt(action);
    } else if (
      action &&
      !buttonClassList.contains(CONTRIL_LEFT) &&
      !buttonClassList.contains(CONTROL_RIGHT) &&
      !buttonClassList.contains(META_LEFT)
    ) {
      const start = inputText.selectionStart;
      let text = inputText.value;
      text = text.slice(0, start) + button.innerHTML + text.slice(start);
      inputText.value = text;
      inputText.selectionEnd = start + 1;
    }
  }
}
export default ButtonInput;
