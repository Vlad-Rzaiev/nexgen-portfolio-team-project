document
  .getElementById('form-inf')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: document.getElementById('user-email').value.trim(),
      comment: document.getElementById('user-comment').value.trim(),
    };

    fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('form-inf').reset();
        openModal('footer-modal');
      })
      .catch(error => console.error('Error submitting form:', error));
  });

function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    console.error('Modal not found:', modalId);
    return;
  }

  console.log('Opening modal:', modalId);
  modal.style.display = 'flex';

  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleBackdropClick);
}

function closeModal() {
  const modal = document.getElementById('footer-modal');

  if (modal) {
    modal.style.display = 'none';

    document.removeEventListener('keydown', handleKeydown);
    document.removeEventListener('click', handleBackdropClick);
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleBackdropClick(event) {
  if (event.target.id === 'footer-modal') {
    closeModal();
  }
}

document.getElementById('close-btn').addEventListener('click', closeModal);
