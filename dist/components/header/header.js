var Header = /** @class */ (function () {
    function Header() {
    }
    Header.prototype.addHeader = function () {
        var _a;
        var wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.append(wrapper);
        var header = document.createElement('div');
        header.className = 'header';
        wrapper.append(header);
        var textArea = document.createElement('textarea');
        textArea.setAttribute('rows', '10');
        textArea.setAttribute('cols', '42');
        header.append(textArea);
        textArea.focus();
        var note = document.createElement('div');
        note.className = 'note';
        header.append(note);
        var noteText = document.createElement('p');
        noteText.innerHTML = 'Keyboard for Windows. Press Ctrl+Alt to change language';
        note.append(noteText);
    };
    return Header;
}());
export default Header;
