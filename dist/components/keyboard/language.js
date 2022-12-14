import { BUTTONS_ENG, BUTTONS_ENG_SHIFT, BUTTONS_ENG_CAPS, BUTTONS_ENG_SHIFT_CAPS, } from '../../constants/buttonsEng.js';
import { BUTTONS_RUS, BUTTONS_RUS_SHIFT, BUTTONS_RUS_CAPS, BUTTONS_RUS_SHIFT_CAPS, } from '../../constants/buttonsRus.js';
import ButtonInscription from './buttons/buttonInscription.js';
import { ENG, RUS, LANG, ENG_CAPS, ENG_SHIFT, ENG_SHIFT_CAPS, RUS_CAPS, RUS_SHIFT, RUS_SHIFT_CAPS, } from '../../constants/language.js';
var Language = /** @class */ (function () {
    function Language() {
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
    Language.prototype.addLanguage = function () {
        var language = localStorage.getItem(LANG);
        if (!language) {
            this.buttonInscription.addButtonInscription(BUTTONS_ENG);
            localStorage.setItem(LANG, ENG);
        }
        else {
            for (var i = 0; i < this.lang.length; i++) {
                if (language === this.lang[i]) {
                    this.buttonInscription.addButtonInscription(this.buttons[i]);
                }
            }
        }
    };
    Language.prototype.switchLanguage = function () {
        var language = localStorage.getItem(LANG);
        for (var i = 0; i < this.lang.length / 2; i++) {
            if (language === this.lang[i]) {
                this.buttonInscription.addButtonInscription(this.buttons[i + 4]);
                localStorage.setItem(LANG, this.lang[i + 4]);
            }
        }
        for (var i = 4; i < this.lang.length; i++) {
            if (language === this.lang[i]) {
                this.buttonInscription.addButtonInscription(this.buttons[i - 4]);
                localStorage.setItem(LANG, this.lang[i - 4]);
            }
        }
    };
    return Language;
}());
export default Language;
