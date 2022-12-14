var ButtonInscription = /** @class */ (function () {
    function ButtonInscription() {
    }
    ButtonInscription.prototype.addButtonInscription = function (buttonsInscription) {
        var buttons = document.querySelectorAll('.button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = buttonsInscription[i];
        }
    };
    return ButtonInscription;
}());
export default ButtonInscription;
