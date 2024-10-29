
const target = document.querySelector('#target');

const observer =
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Элемент в зоне видимости');
                console.log(entry.intersectionRatio);
            }
            else {
                console.log('Элемент вне зоны видимости');
            }
        })
    }, {
        threshold: [0,  0.5, 1]
    });

observer.observe(target);