// Select DOM items
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');

// Functions for tab items
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab item
    this.classList.add('tab-border');
    // Grab content from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class to display the content
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab item click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Functions for sidebar
function toggleSidebar() {
    sidebar.classList.toggle('active-sidebar');
}

// Listen for hamburger menu click
hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked");
    sidebar.classList.toggle('active-sidebar');
});

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
});
