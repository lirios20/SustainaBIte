document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect (keep your existing code)
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
      header.classList.toggle('header-scroll', window.scrollY > 50);
  });


  // Footer effect (keep your existing code)
  const footer = document.querySelector('.footer-section');
  const footerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) footer.classList.add('visible');
  }, { threshold: 0.1 });
  footerObserver.observe(footer);

  // Chat functionality (keep your existing code)
  const chatPopup = document.getElementById('chatPopup');
  const chatInputButton = document.querySelector('.chat-input button');
  const chatInput = document.querySelector('.chat-input input');
  const chatBody = document.querySelector('.chat-body');

  const toggleChat = () => chatPopup.classList.toggle('show');

  const sendMessage = () => {
      const message = chatInput.value.trim();
      if (message) {
          const newMessage = document.createElement('p');
          newMessage.textContent = message;
          chatBody.appendChild(newMessage);
          chatInput.value = '';
          chatBody.scrollTop = chatBody.scrollHeight;
      }
  };

  chatInputButton.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
  });