//filtro do conteudo
function filterPosts(type) {
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        if (type === 'todos') {
            post.classList.remove('hidden');
        } else if (post.classList.contains(type)) {
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden');
        }
    });
}

//accordion

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordions.forEach(otherAccordion => {
            if (otherAccordion !== accordion) {
                const otherBody = otherAccordion.querySelector('.accordion-body');
                otherBody.classList.remove('active');
            }
        });
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    });
});

//select dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.arrow');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerHTML = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });
});
//evento de clique item rádio
document.querySelectorAll('.radio-item').forEach((item) => {
    item.addEventListener('click', (event) => {
        resetIcons();
        const icon = item.querySelector('i');
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-circle-check');
        console.log(`Selected value: ${item.getAttribute('data-value')}`);
    });
});