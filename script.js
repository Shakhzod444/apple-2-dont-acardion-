let iphones = {
    green: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-storage-select-202207-6-7inch-alpinegreen?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1655144562452",
    silver: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-silver?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1654897428563",
    gold: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-gold?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1654897336104",
    graphite: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-graphite?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1654897380792",
    sierra_blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-sierrablue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1655144511904"
}



let rnd = document.querySelectorAll('div[data-color]')
let img = document.querySelector('.imgs')
let color = document.querySelector('.cls')
let txt = document.querySelectorAll('[data-txt]')


rnd.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')
        img.style.backgroundImage = `url("${iphones[key]}")`


    }
})



let link = document.querySelector('.header-bottom-one-up-a')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')

function click() {
    modal.style.display = "block"
}
link.onclick = () => {
    click()
}
close.onclick = () => {
    modal.style.display = "none"

}


let ac_1 = document.querySelectorAll('acordion')
let ac_2 = document.querySelectorAll('acordion-one')
let ac_3 = document.querySelectorAll('.accordion-cotent')
console.log(ac_3);

    // function click2() {
    //     ac_3.style.display = "block"
    // }
    // ac_1.onclick = () => {
    //     click2()
    // }

































// let Green = document.querySelector('.main-right-color-green')
// let Silver = document.querySelector('.main-right-color-silver')
// let Gold = document.querySelector('.main-right-color-gold')
// let Graphite = document.querySelector('.main-right-color-Graphite')
// let Blue = document.querySelector('.main-right-color-blue')

// Green.onclick = () => {
//     color.innerHTML = 'Color - Alpine Green'
// }
// Silver.onclick = () => {
//     color.innerHTML = 'Color - Silver'
// }
// Gold.onclick = () => {
//     color.innerHTML = 'Color - Gold'
// }
// Graphite.onclick = () => {
//     color.innerHTML = 'Color - Graphite'
// }
// Blue.onclick = () => {
//     color.innerHTML = 'Color - Sierra Blue'
// }
