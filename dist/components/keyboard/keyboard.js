import { BUTTONS_LABEL } from '../../constants/buttonsLabel.js';
import ButtonInput from './buttons/buttonInput.js';
import Animation from './animation.js';
var Keyboard = /** @class */ (function () {
    function Keyboard() {
        this.buttonInput = new ButtonInput();
        this.animation = new Animation();
    }
    Keyboard.prototype.addKeyboard = function () {
        var _a;
        var keyboard = document.createElement('div');
        keyboard.className = 'keyboard';
        (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.append(keyboard);
        for (var i = 0; i < 64; i++) {
            var button = document.createElement('div');
            button.className = "button ".concat(BUTTONS_LABEL[i]);
            keyboard.append(button);
        }
        this.addMouseClickListeners(keyboard, true);
        this.addMouseClickListeners(keyboard, false);
        this.addKeyboardClickListeners(true);
        this.addKeyboardClickListeners(false);
    };
    Keyboard.prototype.addMouseClickListeners = function (container, eventAnimation) {
        var _this = this;
        var action = '';
        eventAnimation ? (action = 'mousedown') : (action = 'mouseup');
        container.addEventListener(action, function (event) {
            var clickedButton = event.target;
            if (clickedButton.classList.contains('button')) {
                _this.animation.addAnimation(clickedButton, eventAnimation);
                _this.buttonInput.addInputText(clickedButton, eventAnimation);
            }
            _this.animation.addFocusTextArea();
        });
    };
    Keyboard.prototype.addKeyboardClickListeners = function (eventAnimation) {
        var _this = this;
        var action = '';
        eventAnimation ? (action = 'keydown') : (action = 'keyup');
        window.addEventListener(action, function (event) {
            event.preventDefault();
            var e = event;
            var buttons = document.querySelectorAll('.button');
            var clickedButton = e.code;
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].classList.contains(clickedButton)) {
                    _this.animation.addAnimation(buttons[i], eventAnimation);
                    _this.buttonInput.addInputText(buttons[i], eventAnimation);
                }
            }
            _this.animation.addFocusTextArea();
        });
    };
    return Keyboard;
}());
export default Keyboard;
