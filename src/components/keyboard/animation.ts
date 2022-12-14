class Animation {
  addAnimation(button: Element, action: Boolean) {
    const activeCapsLock = button.classList.contains('CapsLock');

    if (activeCapsLock && action) {
      button.classList.toggle('activeButton');
    } else if (!activeCapsLock && action) {
      button.classList.add('activeButton');
    } else if (!activeCapsLock && !action) {
      button.classList.remove('activeButton');
    }
  }
  addFocusTextArea() {
    const textarea: HTMLTextAreaElement | null =
      document.querySelector('textArea');
    textarea?.focus();
  }
}
export default Animation;
