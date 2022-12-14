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
  buttons: string[][];
  lang: string[];
  constructor() {
    this.buttonInscription = new ButtonInscription();
    this.language = new Language();
    this.buttons = [
      BUTTONS_ENG,
      BUTTONS_ENG_SHIFT,
      BUTTONS_ENG_CAPS,
      BUTTONS_ENG_SHIFT_CAPS,
      BUTTONS_RUS,
      BUTTONS_RUS_SHIFT,
      BUTTONS_RUS_CAPS,
      BUTTONS_RUS_SHIFT_CAPS,
    ];
    this.lang = [
      ENG,
      ENG_SHIFT,
      ENG_CAPS,
      ENG_SHIFT_CAPS,
      RUS,
      RUS_SHIFT,
      RUS_CAPS,
      RUS_SHIFT_CAPS,
    ];
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
    const lang = localStorage.getItem(LANG);
    const activeCapsLock = document
      .querySelector('.CapsLock')
      ?.classList.contains('activeButton');

    if (!action && activeCapsLock) {
      for (let i = 0; i < this.lang.length; i++) {
        if (this.lang[i] === lang) {
          this.buttonInscription.addButtonInscription(this.buttons[i + 2]);
          localStorage.setItem(LANG, this.lang[i + 2]);
        }
      }
    }
    if (!action && !activeCapsLock) {
      for (let i = 0; i < this.lang.length; i++) {
        if (this.lang[i] === lang) {
          this.buttonInscription.addButtonInscription(this.buttons[i - 2]);
          localStorage.setItem(LANG, this.lang[i - 2]);
        }
      }
    }
  }

  clickShift(action: boolean) {
    const lang = localStorage.getItem(LANG);
    if (action) {
      if (lang === ENG) {
        this.buttonInscription.addButtonInscription(BUTTONS_ENG_SHIFT);
        localStorage.setItem(LANG, ENG_SHIFT);
      }
      if (lang === ENG_CAPS) {
        this.buttonInscription.addButtonInscription(BUTTONS_ENG_SHIFT_CAPS);
        localStorage.setItem(LANG, ENG_SHIFT_CAPS);
      }
      if (lang === RUS) {
        this.buttonInscription.addButtonInscription(BUTTONS_RUS_SHIFT);
        localStorage.setItem(LANG, RUS_SHIFT);
      }
      if (lang === RUS_CAPS) {
        this.buttonInscription.addButtonInscription(BUTTONS_RUS_SHIFT_CAPS);
        localStorage.setItem(LANG, RUS_SHIFT_CAPS);
      }
    }
    if (!action) {
      for (let i = 0; i < this.lang.length; i++) {
        if (this.lang[i] === lang) {
          this.buttonInscription.addButtonInscription(this.buttons[i - 1]);
          localStorage.setItem(LANG, this.lang[i - 1]);
        }
      }
    }
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
