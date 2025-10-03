const animate = document.querySelectorAll('.fade-in, .slideinLeft, .slideinRight, .zoom-in')
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
    })
}, {threshold: 0.2});
animate.forEach(animate => observer.observe(animate))