var myForm = document.getElementById('myForm')
var discount = document.getElementById('discount')
var totalMoney = document.getElementById('totalMoney')
var btn = document.getElementById('btn')
        
myForm.addEventListener('submit', function(e){
    e.preventDefault()
    discount.classList.add('active')
    totalMoney.classList.add('active')
    btn.innerHTML = "Applied"
})