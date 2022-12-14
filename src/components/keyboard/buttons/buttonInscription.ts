class ButtonInscription {
  addButtonInscription(buttonsInscription: string[]) {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = buttonsInscription[i];
    }
  }
}
export default ButtonInscription;
