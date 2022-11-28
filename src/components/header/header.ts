class Header{
    addHeader() {
      const wrapper = document.createElement('div');
      wrapper.className = 'wrapper';
      document.querySelector('body')?.append(wrapper);

      const header = document.createElement('div');
      header.className = 'header';
      wrapper.append(header);

      const textArea = document.createElement('textarea');
      textArea.setAttribute('rows', '10');
      textArea.setAttribute('cols', '42');
      header.append(textArea);
      textArea.focus();

      const note = document.createElement('div');
      note.className = 'note';
      header.append(note);

      const noteText = document.createElement('p');
      noteText.innerHTML = 'Keyboard for Windows. Press Ctrl+Alt to change language';
      note.append(noteText);
    }

  }
export default Header;