import DOMPurify from 'dompurify';

const createDialog = (title, content, buttons) => {
  const dialog = document.createElement('dialog');
  dialog.innerHTML = `
    <h2>${DOMPurify.sanitize(title)}</h2>
    <p>${DOMPurify.sanitize(content)}</p>
  `;

  // Create buttons
  buttons.forEach((button) => {
    const btn = document.createElement('button');
    btn.textContent = button.label;
    btn.addEventListener('click', () => {
      button.callback();
      dialog.close();
    });
    dialog.appendChild(btn);
  });

  // Append to body and open
  document.body.appendChild(dialog);
  dialog.showModal();
};

export default createDialog;