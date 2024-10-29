
const target = document.querySelector('#target');
const scrollContainer = document.querySelector('#scroll-container');

const observer =
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Элемент в зоне видимости');
                }
                else {
                    console.log('Элемент вне зоны видимости');
                }
            })
        }, {
            root: scrollContainer
        });

observer.observe(target);