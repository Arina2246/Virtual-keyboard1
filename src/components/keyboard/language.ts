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
  constructor() {
    this.buttonInscription = new ButtonInscription();
  }
  addLanguage() {
    const language = localStorage.getItem(LANG);
    if (language === ENG) {
      this.buttonInscription.addButtonInscription(BUTTONS_ENG);
    } else if (language === RUS) {
      this.buttonInscription.addButtonInscription(BUTTONS_RUS);
    } else {
      this.buttonInscription.addButtonInscription(BUTTONS_ENG);
      localStorage.setItem(LANG, ENG);
    }
  }
  switchLanguage() {
    const language = localStorage.getItem(LANG);
    switch (language) {
      case ENG:
        this.buttonInscription.addButtonInscription(BUTTONS_RUS);
        localStorage.setItem(LANG, RUS);
        break;
      case ENG_CAPS:
        this.buttonInscription.addButtonInscription(BUTTONS_RUS_CAPS);
        localStorage.setItem(LANG, RUS_CAPS);
        break;
      case ENG_SHIFT:
        this.buttonInscription.addButtonInscription(BUTTONS_RUS_SHIFT);
        localStorage.setItem(LANG, RUS_SHIFT);
        break;
      case ENG_SHIFT_CAPS:
        this.buttonInscription.addButtonInscription(BUTTONS_RUS_SHIFT_CAPS);
        localStorage.setItem(LANG, RUS_SHIFT_CAPS);
        break;
      case RUS:
        this.buttonInscription.addButtonInscription(BUTTONS_ENG);
        localStorage.setItem(LANG, ENG);
        break;
      case RUS_CAPS:
        this.buttonInscription.addButtonInscription(BUTTONS_ENG_CAPS);
        localStorage.setItem(LANG, ENG_CAPS);
        break;
      case RUS_SHIFT:
        this.buttonInscription.addButtonInscription(BUTTONS_ENG_SHIFT);
        localStorage.setItem(LANG, ENG_SHIFT);
        break;
      case RUS_SHIFT_CAPS:
        this.buttonInscription.addButtonInscription(BUTTONS_ENG_SHIFT_CAPS);
        localStorage.setItem(LANG, ENG_SHIFT_CAPS);
        break;
    }
  }
}
export default Language;
// shift caps lang
