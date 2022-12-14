var Animation = /** @class */ (function () {
    function Animation() {
    }
    Animation.prototype.addAnimation = function (button, action) {
        var activeCapsLock = button.classList.contains('CapsLock');
        if (activeCapsLock && action) {
            button.classList.toggle('activeButton');
        }
        else if (!activeCapsLock && action) {
            button.classList.add('activeButton');
        }
        else if (!activeCapsLock && !action) {
            button.classList.remove('activeButton');
        }
    };
    Animation.prototype.addFocusTextArea = function () {
        var textarea = document.querySelector('textArea');
        textarea === null || textarea === void 0 ? void 0 : textarea.focus();
    };
    return Animation;
}());
export default Animation;
