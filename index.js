// Your code here

function moveDodgerRight() { 
    const dodger = document.getElementById('dodger')
    const leftNumbers = dodger.style.left.replace('px', '')
    const right= parseInt(leftNumbers,10);
    dodger.style.left = `${right + 1}px`;
document.addEventListener('keydown', function (event){
if (leftNumbers < 679 && event.key === "ArrowRight" || leftNumbers >= 280){
        moveDodgerRight()}


})}



function moveDodgerLeft(){
    const dodger = document.getElementById('dodger')
    const leftNumbers = dodger.style.left.replace('px', '')
    const left= parseInt(leftNumbers, 10)
    dodger.style.left = `${left - 1}px`
document.addEventListener('keydown', function (e){ 
    if (leftNumbers >= 280 && e.key === 'ArrowLeft' || leftNumbers < 679)
    {moveDodgerLeft()}

})
}
console.log(moveDodgerLeft())
console.log(moveDodgerRight())
//console.log(holdStill())