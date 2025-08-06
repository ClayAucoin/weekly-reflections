fetch('/weekly-reflections/navigation.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navigation2').innerHTML = html;
    })
    .catch(error => console.error('Error loading content:', error));
