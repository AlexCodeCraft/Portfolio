document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Appliquer le mode sombre par défaut si aucun thème n'est stocké
    if (!localStorage.getItem('theme')) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', localStorage.getItem('theme'));
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);

        // Sauvegarder la préférence de l'utilisateur dans le localStorage
        localStorage.setItem('theme', newTheme);

        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});
