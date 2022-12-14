import {
  BUTTONS_ENG,
  BUTTONS_ENG_SHIFT,
  BUTTONS_ENG_CAPS,
  BUTTONS_ENG_SHIFT_CAPS,
} from '../../constants/buttonsEng.js';
import {
  BUTTONS_RUS,
  BUTTONS_RUS_SHIFT,
  BUTTONS_RUS_CAPS,
  BUTTONS_RUS_SHIFT_CAPS,
} from '../../constants/buttonsRus.js';
import ButtonInscription from './buttons/buttonInscription.js';
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
} from '../../constants/language.js';

class Language {
  buttonInscription: ButtonInscription;
  buttons: string[][];
  lang: string[];
  constructor() {
    this.buttonInscription = new ButtonInscription();
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
  addLanguage() {
    const language = localStorage.getItem(LANG);
    if (!language) {
      this.buttonInscription.addButtonInscription(BUTTONS_ENG);
      localStorage.setItem(LANG, ENG);
    } else {
      for (let i = 0; i < this.lang.length; i++) {
        if (language === this.lang[i]) {
          this.buttonInscription.addButtonInscription(this.buttons[i]);
        }
      }
    }
  }
  switchLanguage() {
    const language = localStorage.getItem(LANG);
    for (let i = 0; i < this.lang.length / 2; i++) {
      if (language === this.lang[i]) {
        this.buttonInscription.addButtonInscription(this.buttons[i + 4]);
        localStorage.setItem(LANG, this.lang[i + 4]);
      }
    }
    for (let i = 4; i < this.lang.length; i++) {
      if (language === this.lang[i]) {
        this.buttonInscription.addButtonInscription(this.buttons[i - 4]);
        localStorage.setItem(LANG, this.lang[i - 4]);
      }
    }
  }
}
export default Language;
