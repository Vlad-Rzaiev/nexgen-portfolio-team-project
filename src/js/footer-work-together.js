import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .getElementById('form-inf')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: document.getElementById('user-email').value.trim(),
      comment: document.getElementById('user-comment').value.trim(),
    };

    if (formData.email === '' || formData.comment === '') {
      iziToast.info({
        title: 'Info',
        message: 'Please fill in the email and comment fields',
        position: 'center',
        timeout: 10000,
      });

      return;
    }

    fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.title && data.message) {
          document.getElementById('form-inf').reset();
          openModal('footer-modal');
        } else {
          iziToast.error({
            title: 'Error',
            message: 'The email must be in format test@gmail.com.',
            position: 'center',
            timeout: 10000,
          });
        }
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: error,
          position: 'center',
          timeout: 10000,
        });
        console.log(error);
      });
  });

function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    iziToast.error({
      title: 'Modal not found:',
      message: modalId,
      position: 'center',
      timeout: 10000,
    });

    return;
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleBackdropClick);
}

function closeModal() {
  const modal = document.getElementById('footer-modal');

  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';

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
