var myForm = document.getElementById('myForm')
var discount = document.getElementById('discount')
var totalMoney = document.getElementById('totalMoney')
        
myForm.addEventListener('submit', function(e){
    e.preventDefault()
    discount.classList.add('active')
    totalMoney.classList.add('active')
    console.log("CSDFv")
})