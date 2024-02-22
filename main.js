function openTab(tabName) {
    const tabs = document.querySelectorAll('.content');
    tabs.forEach(function(tab) {
        if (tab.id.toLowerCase() === tabName.toLowerCase()) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(function(button) {
        if (button.innerHTML.toLowerCase() === tabName.toLowerCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
