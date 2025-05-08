// router.js

// Створення простого роутера
const routes = {
    '/': '/index.html',
    '/menu': '/menu.html',
    '/gallery': '/gallery.html',
    '/contacts': '/contacts.html',
  };
  
  // Функція для завантаження вмісту сторінки
  function loadPage(url) {
    // Знайдемо контейнер для контенту
    const contentContainer = document.getElementById('content-container');
    
    // Зазначимо, що робимо перехід (для анімації)
    contentContainer.classList.add('page-transition-out');
  
    // Очікуємо завершення анімації виходу перед завантаженням нового контенту
    setTimeout(() => {
      fetch(routes[url]) // Отримуємо HTML сторінки
        .then(response => response.text())
        .then(data => {
          // Заміщаємо вміст контейнера новим контентом
          contentContainer.innerHTML = data;
          
          // Запускаємо анімацію входу
          contentContainer.classList.remove('page-transition-out');
          contentContainer.classList.add('page-transition-in');
          
          // Оновлюємо URL
          window.history.pushState({}, '', url);
        });
    }, 500); // Час анімації виходу
  }
  
  // Слухач події для переходів за посиланнями
  document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.href) {
      event.preventDefault();
      const url = new URL(event.target.href).pathname;
      loadPage(url);
    }
  });
  
  // Ініціалізація першої сторінки
  window.addEventListener('popstate', () => {
    loadPage(window.location.pathname);
  });
  
  // Завантажити початкову сторінку
  window.addEventListener('DOMContentLoaded', () => {
    loadPage(window.location.pathname);
  });
  