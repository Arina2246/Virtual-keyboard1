import { BUTTONS_ENG, BUTTONS_ENG_SHIFT, BUTTONS_ENG_CAPS, BUTTONS_ENG_SHIFT_CAPS, } from '../../../constants/buttonsEng.js';
import { BUTTONS_RUS, BUTTONS_RUS_SHIFT, BUTTONS_RUS_CAPS, BUTTONS_RUS_SHIFT_CAPS, } from '../../../constants/buttonsRus.js';
import { ENG, RUS, LANG, ENG_CAPS, ENG_SHIFT, ENG_SHIFT_CAPS, RUS_CAPS, RUS_SHIFT, RUS_SHIFT_CAPS, } from '../../../constants/language.js';
import ButtonInscription from './buttonInscription.js';
import Language from '../language.js';
var SpecButtons = /** @class */ (function () {
    function SpecButtons() {
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
    SpecButtons.prototype.clickTab = function (action) {
        if (action) {
            var inputText = document.querySelector('textarea');
            var start = inputText.selectionStart;
            var text = inputText.value;
            text = text.slice(0, start) + '    ' + text.slice(start);
            inputText.value = text;
            inputText.selectionEnd = start + 4;
        }
    };
    SpecButtons.prototype.clickDelete = function (action) {
        if (action) {
            var inputText = document.querySelector('textarea');
            var start = inputText.selectionStart;
            var text = inputText.value;
            text = text.slice(0, start) + text.slice(start + 1);
            inputText.value = text;
            inputText.selectionEnd = start;
        }
    };
    SpecButtons.prototype.clickBackspace = function (action) {
        if (action) {
            var inputText = document.querySelector('textarea');
            var start = inputText.selectionStart;
            var text = inputText.value;
            text = text.slice(0, start - 1) + text.slice(start);
            inputText.value = text;
            inputText.selectionEnd = start - 1;
        }
    };
    SpecButtons.prototype.clickEnter = function (action) {
        if (action) {
            var inputText = document.querySelector('textarea');
            var start = inputText.selectionStart;
            var text = inputText.value;
            text = text.slice(0, start) + '\n' + text.slice(start);
            inputText.value = text;
            inputText.selectionEnd = start + 1;
        }
    };
    SpecButtons.prototype.clickCapsLock = function (action) {
        var _a;
        var lang = localStorage.getItem(LANG);
        var activeCapsLock = (_a = document
            .querySelector('.CapsLock')) === null || _a === void 0 ? void 0 : _a.classList.contains('activeButton');
        if (!action && activeCapsLock) {
            for (var i = 0; i < this.lang.length; i++) {
                if (this.lang[i] === lang) {
                    this.buttonInscription.addButtonInscription(this.buttons[i + 2]);
                    localStorage.setItem(LANG, this.lang[i + 2]);
                }
            }
        }
        if (!action && !activeCapsLock) {
            for (var i = 0; i < this.lang.length; i++) {
                if (this.lang[i] === lang) {
                    this.buttonInscription.addButtonInscription(this.buttons[i - 2]);
                    localStorage.setItem(LANG, this.lang[i - 2]);
                }
            }
        }
    };
    SpecButtons.prototype.clickShift = function (action) {
        var lang = localStorage.getItem(LANG);
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
            for (var i = 0; i < this.lang.length; i++) {
                if (this.lang[i] === lang) {
                    this.buttonInscription.addButtonInscription(this.buttons[i - 1]);
                    localStorage.setItem(LANG, this.lang[i - 1]);
                }
            }
        }
    };
    SpecButtons.prototype.clickAlt = function (action) {
        var _a, _b;
        var activeControlLeft = (_a = document
            .querySelector('.ControlLeft')) === null || _a === void 0 ? void 0 : _a.classList.contains('activeButton');
        var activeControlRight = (_b = document
            .querySelector('.ControlRight')) === null || _b === void 0 ? void 0 : _b.classList.contains('activeButton');
        if (action && (activeControlLeft || activeControlRight)) {
            this.language.switchLanguage();
        }
    };
    return SpecButtons;
}());
export default SpecButtons;
