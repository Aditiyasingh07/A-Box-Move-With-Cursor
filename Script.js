window.addEventListener('mouseover', (details)=>{
    var movebox = document.querySelector('#box-container')

    var event = gsap.utils.mapRange(0,
        window.innerWidth,
        50 + movebox.getBoundingClientRect().width / 2, 
        window.innerWidth - (50+movebox.getBoundingClientRect().width/2), details.clientX
    )
    gsap.to("#box-container", {
        left: event,
        escape: Power3,
    })
})