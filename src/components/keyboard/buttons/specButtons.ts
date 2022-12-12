import {
  BUTTONS_ENG,
  BUTTONS_ENG_SHIFT,
  BUTTONS_ENG_CAPS,
  BUTTONS_ENG_SHIFT_CAPS,
} from '../../../constants/buttonsEng.js';
import {
  BUTTONS_RUS,
  BUTTONS_RUS_SHIFT,
  BUTTONS_RUS_CAPS,
  BUTTONS_RUS_SHIFT_CAPS,
} from '../../../constants/buttonsRus.js';
import {
  ENG,
  RUS,
  LANG,
  ENG_CAPS,
  ENG_SHIFT,
  ENG_SHIFT_CAPS,
  RUS_CAPS,
  RUS_SHIFT,
  RUS_SHIFT_CAPS,
} from '../../../constants/language.js';
import ButtonInscription from './buttonInscription.js';
import Language from '../language.js';

class SpecButtons {
  buttonInscription: ButtonInscription;
  language: Language;
  constructor() {
    this.buttonInscription = new ButtonInscription();
    this.language = new Language();
  }

  clickTab(action: boolean) {
    if (action) {
      const inputText = document.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;
      const start = inputText.selectionStart;
      let text = inputText.value;
      text = text.slice(0, start) + '    ' + text.slice(start);
      inputText.value = text;
      inputText.selectionEnd = start + 4;
    }
  }

  clickDelete(action: boolean) {
    if (action) {
      const inputText = document.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;
      const start = inputText.selectionStart;
      let text = inputText.value;
      text = text.slice(0, start) + text.slice(start + 1);
      inputText.value = text;
      inputText.selectionEnd = start;
    }
  }

  clickBackspace(action: boolean) {
    if (action) {
      const inputText = document.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;
      const start = inputText.selectionStart;
      let text = inputText.value;
      text = text.slice(0, start - 1) + text.slice(start);
      inputText.value = text;
      inputText.selectionEnd = start - 1;
    }
  }
  clickEnter(action: boolean) {
    if (action) {
      const inputText = document.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;
      const start = inputText.selectionStart;
      let text = inputText.value;
      text = text.slice(0, start) + '\n' + text.slice(start);
      inputText.value = text;
      inputText.selectionEnd = start + 1;
    }
  }

  clickCapsLock(action: boolean) {
    const activeShiftLeft = document
      .querySelector('.ShiftLeft')
      ?.classList.contains('activeButton');
    const activeShiftRight = document
      .querySelector('.ShiftRight')
      ?.classList.contains('activeButton');
    const activeCapsLock = document
      .querySelector('.CapsLock')
      ?.classList.contains('activeButton');
    const lang = localStorage.getItem(LANG);
    if (!action && activeCapsLock && lang === ENG) {
      this.buttonInscription.addButtonInscription(BUTTONS_ENG_CAPS);
    }
    if (!action && !activeCapsLock && lang === ENG) {
      this.buttonInscription.addButtonInscription(BUTTONS_ENG);
    }
    if (!action && activeCapsLock && lang === RUS) {
      this.buttonInscription.addButtonInscription(BUTTONS_RUS_CAPS);
    }
    if (!action && !activeCapsLock && lang === RUS) {
      this.buttonInscription.addButtonInscription(BUTTONS_RUS);
    }
  }

  clickShift(action: boolean) {
    const activeShiftLeft = document
      .querySelector('.ShiftLeft')
      ?.classList.contains('activeButton');
    const activeShiftRight = document
      .querySelector('.ShiftRight')
      ?.classList.contains('activeButton');
    const activeCapsLock = document
      .querySelector('.CapsLock')
      ?.classList.contains('activeButton');
    // const lang = localStorage.getItem(LANG);
    // if (!action && activeCapsLock && lang === ENG) {
    //   this.buttonInscription.addButtonInscription(BUTTONS_ENG_CAPS);
    // }
    // if (!action && !activeCapsLock && lang === ENG) {
    //   this.buttonInscription.addButtonInscription(BUTTONS_ENG);
    // }
    // if (!action && activeCapsLock && lang === RUS) {
    //   this.buttonInscription.addButtonInscription(BUTTONS_RUS_CAPS);
    // }
    // if (!action && !activeCapsLock && lang === RUS) {
    //   this.buttonInscription.addButtonInscription(BUTTONS_RUS);
    // }
  }
  clickAlt(action: boolean) {
    const activeControlLeft = document
      .querySelector('.ControlLeft')
      ?.classList.contains('activeButton');
    const activeControlRight = document
      .querySelector('.ControlRight')
      ?.classList.contains('activeButton');
    if (action && (activeControlLeft || activeControlRight)) {
      this.language.switchLanguage();
    }
  }
}
export default SpecButtons;
