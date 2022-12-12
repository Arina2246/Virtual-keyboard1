import Header from './components/header/header.js';
import Keyboard from './components/keyboard/keyboard.js';
import Language from './components/keyboard/language.js';
const header = new Header();
const keyboard = new Keyboard();
const language = new Language();
header.addHeader();
keyboard.addKeyboard();
language.addLanguage();
