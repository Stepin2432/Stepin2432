document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log('Form submitted:', data);
        messageContainer.innerHTML = '<p>Thank you for your message!</p>';
        form.reset();
    });

    const portfolioItems = [
        { title: 'Project 1', description: 'Description of project 1' },
    ];

    const portfolioContainer = document.getElementById('portfolio-items');
    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');
        itemElement.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
        portfolioContainer.appendChild(itemElement);
    });

    document.getElementById('toggle-blue-mode').addEventListener('click', function () {
        document.body.classList.toggle('blue-mode');
    });
});