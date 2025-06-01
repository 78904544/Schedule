// Применяем тему ДО загрузки страницы (добавляем в начало)
(function applyThemeEarly() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Функция для переключения темы
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Синхронизируем все переключатели на странице
    document.querySelectorAll('#checkbox').forEach(checkbox => {
        checkbox.checked = newTheme === 'dark';
    });
}

// Инициализация после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Настраиваем переключатель согласно текущей теме
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        checkbox.checked = currentTheme === 'dark';
        checkbox.addEventListener('change', toggleTheme);
    }
    
    // Синхронизация темы между вкладками
    window.addEventListener('storage', function(e) {
        if (e.key === 'theme') {
            document.documentElement.setAttribute('data-theme', e.newValue);
            document.querySelectorAll('#checkbox').forEach(checkbox => {
                checkbox.checked = e.newValue === 'dark';
            });
        }
    });
});