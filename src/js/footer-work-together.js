 console.log('footer')
document.getElementById('form-inf').addEventListener('submit', function (event) {
     event.preventDefault();

    const formData = {
      email: document.getElementById('user-email').value.trim(),
      comment: document.getElementById('user-comment').value.trim()
    };
    fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
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

 if (modal) {
    console.log('Opening modal:', modalId);
    modal.style.display = 'flex';  // Відкриває модальне вікно
  } else {
    console.error('Modal not found:', modalId);  // Якщо модального вікна немає
  }  }

  document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('footer-modal').style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target.id === 'footer-modal') {
      document.getElementById('footer-modal').style.display = 'none';
    }
  });
document.addEventListener(
  
  'keydown', (event) => {
  if (event.key === 'Escape') {
    const modal = document.getElementById('footer-modal'); // Отримуємо модальне вікно
    if (modal && modal.style.display === 'flex') {  // Перевіряємо, чи модальне вікно відкрите
      modal.style.display = 'none';
    }
  }
});
