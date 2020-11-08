var c = 0;
var moviePrice = 10;
var totalPrice = document.querySelector('.total-price');
var totalSeats = document.querySelector('.total-seats');


function func() {
    console.log(parseInt(moviePrice))
    let displayPrice = parseInt(moviePrice) * c;
    totalPrice.innerHTML = displayPrice
    totalSeats.innerText = c;
}
document.querySelector('.selected-movie').addEventListener('click', () => {
    moviePrice = document.querySelector('.selected-movie').value;
    func();
})
document.querySelector('.container').addEventListener('click', (e) => {

    // console.log(e.target.className)
    if (e.target.className.includes('occupied') === false) {
        if (e.target.className.split(' ')[0] === 'box')
            e.target.classList.toggle('selected');
        // console.log(e.target.className.includes('occupied'))
        if (e.target.className.includes('')) {
            if (e.target.className.includes('selected')) {
                c++;
            }
            else if (e.target.className !== 'container') {
                c--;
            }
        }
    }
    func();
})