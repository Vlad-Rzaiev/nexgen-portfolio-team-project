import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .getElementById('form-inf')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const titleModal = document.querySelector('.title-modal');
    const textModal = document.querySelector('.text-modal');

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
      .then(response => {
        return response.text().then(text => {
          try {
            const data = JSON.parse(text);
            return { status: response.status, data };
          } catch (error) {
            return { status: response.status, data: null };
          }
        });
      })
      .then(({ status, data }) => {
        if (status === 201) {
          document.getElementById('form-inf').reset();
          openModal('footer-modal');
          titleModal.textContent = data.title;
          textModal.textContent = data.message;

          iziToast.success({
            title: 'Success',
            message: 'Successful operation',
            position: 'topRight',
            timeout: 5000,
          });
        } else if (status === 400) {
          iziToast.error({
            title: 'Error',
            message: data.message || 'Invalid request body',
            position: 'center',
            timeout: 10000,
          });
        } else if (status === 404) {
          iziToast.error({
            title: 'Error',
            message: data.message || 'Requested resource not found.',
            position: 'center',
            timeout: 10000,
          });
        } else if (status === 500) {
          iziToast.error({
            title: 'Error',
            message:
              data.message || 'Internal server error. Please try again later.',
            position: 'center',
            timeout: 10000,
          });
        } else {
          iziToast.error({
            title: 'Error',
            message: 'Unknown status. See details in console.',
            position: 'center',
            timeout: 10000,
          });

          console.error('Error:', status, data);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);

        iziToast.error({
          title: 'Error',
          message: 'Network error or server unreachable',
          position: 'center',
          timeout: 10000,
        });
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
