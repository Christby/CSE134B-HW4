function showAlert(message) {
  // first, clean the message using DOMPurify
  let msg = DOMPurify.sanitize(message);
  const dialogTemplate = document.querySelector('#alert-dialog');
  const dialog = dialogTemplate.content.cloneNode(true).querySelector('dialog');
  dialog.querySelector('.header').textContent = 'Alert';
  dialog.querySelector('.body').textContent = msg;
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  document.body.appendChild(dialog);
  dialog.showModal();
}

function showConfirm(message, outputTag) {
  // first, clean the message using DOMPurify
  let msg = DOMPurify.sanitize(message);
  const dialogTemplate = document.querySelector('#confirm-dialog');
  const dialog = dialogTemplate.content.cloneNode(true).querySelector('dialog');
  dialog.querySelector('.header').textContent = 'Confirm';
  dialog.querySelector('.body').textContent = msg;
  // not sure how to handle the output from here
  dialog.querySelector('.ok').addEventListener('click', () => {
    outputTag.textContent = `Confirm result: true`;
    dialog.close();
  });
  dialog.querySelector('.cancel').addEventListener('click', () => {
    outputTag.textContent = `Confirm result: false`;
    dialog.close();
  });
  document.body.appendChild(dialog);
  dialog.showModal();
}

function showPrompt(message, outputTag) {
  // first, clean the message using DOMPurify
  let msg = DOMPurify.sanitize(message);
  const dialogTemplate = document.querySelector('#prompt-dialog');
  const dialog = dialogTemplate.content.cloneNode(true).querySelector('dialog');
  dialog.querySelector('.header').textContent = 'Prompt';
  dialog.querySelector('.body').textContent = msg;
  let input = document.createElement('input');
  input.type = 'text';
  dialog.querySelector('.body').appendChild(input);
  // not sure how to handle the output from here
  dialog.querySelector('.ok').addEventListener('click', () => {
    if (input === null) {
      outputTag.textContent = 'User didn\'t input his/her name';
      dialog.close();
    } else {
      let cleanInput = DOMPurify.sanitize(input);
      outputTag.textContent = `Your name is: ${cleanInput}`;
      dialog.close();
    }
  });
  dialog.querySelector('.cancel').addEventListener('click', () => {
    outputTag.textContent = `User didn\'t input his/her name`;
    dialog.close();
  });
  document.body.appendChild(dialog);
  dialog.showModal();
}

export {showAlert, showConfirm, showPrompt}