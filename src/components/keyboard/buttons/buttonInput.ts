import SpecButtons from './specButtons.js';
class ButtonInput {
  specButtons: SpecButtons;
  constructor() {
    this.specButtons = new SpecButtons();
  }

  addInputText(button: Element, action: boolean) {
    const inputText = document.querySelector('textarea') as HTMLTextAreaElement;
    const buttonClassList = button.classList;
    if (buttonClassList.contains('Tab')) {
      this.specButtons.clickTab(action);
    } else if (buttonClassList.contains('Delete')) {
      this.specButtons.clickDelete(action);
    } else if (buttonClassList.contains('Backspace')) {
      this.specButtons.clickBackspace(action);
    } else if (buttonClassList.contains('Enter')) {
      this.specButtons.clickEnter(action);
    } else if (buttonClassList.contains('CapsLock')) {
      this.specButtons.clickCapsLock(action);
    } else if (
      buttonClassList.contains('ShiftLeft') ||
      buttonClassList.contains('ShiftRight')
    ) {
      this.specButtons.clickShift(action);
    } else if (
      buttonClassList.contains('AltLeft') ||
      buttonClassList.contains('AltRight')
    ) {
      this.specButtons.clickAlt(action);
    } else if (
      action &&
      !buttonClassList.contains('ControlLeft') &&
      !buttonClassList.contains('ControlRight') &&
      !buttonClassList.contains('MetaLeft')
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
