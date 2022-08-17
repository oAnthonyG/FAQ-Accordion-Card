const container = document.querySelectorAll('.container__box__message')



container.forEach(function (containers) {
    containers.addEventListener('click', () => {
        containers.classList.add('active')
    })

})
