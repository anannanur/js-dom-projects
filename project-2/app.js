// const root = document.getElementById('root')
// const btn = document.getElementById('change-btn')
// const rgb = document.getElementById('rgb')

// btn.addEventListener('click', function () {
//     const red = Math.floor((Math.random() * 255))
//     const green = Math.floor((Math.random() * 255))
//     const blue = Math.floor((Math.random() * 255))


//     root.style.backgroundColor = `rgb(${red},${green},${blue})`
//     rgb.innerText = `rgb(${red},${green},${blue})`
//     // root.style.backgroundColor = bgColor
// })

window.onload = () => {
    main()
}
const main = function () {
    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn')

    btn.addEventListener('click', function () {    
        root.style.backgroundColor = generateColor()
        rgb.innerText = generateColor()
        root.style.backgroundColor = generateColor()
    })

}
const generateColor = function (){
    const red = Math.floor((Math.random() * 255))
    const green = Math.floor((Math.random() * 255))
    const blue = Math.floor((Math.random() * 255))

    return `rgb(${red},${green},${blue})`
}