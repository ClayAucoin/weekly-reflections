fetch('html/navigation-lv1.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navigation').innerHTML = html;
    })
    .catch(error => console.error('Error loading content:', error));

// Load and inject navigation.html
fetch('html/navigation-lv1.html')
  .then(response => response.text())
  .then(html => {
    const navContainer = document.getElementById('nav-placeholder');
    navContainer.innerHTML = html;

    const currentPath = location.pathname.replace(/\/+$/, '');
    const links = navContainer.querySelectorAll('a');

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname.replace(/\/+$/, '');

      if (linkPath === currentPath) {
        link.classList.add('active-page');
      }
    });
  });
