const smallAddBtn = document.querySelector(".addBtn.small");
const medAddBtn = document.querySelector(".addBtn.med");
const largeAddBtn = document.querySelector(".addBtn.large");

const smallAddBtnBuy = document.querySelector(".addBtn.small.buy");
const medAddBtnBuy = document.querySelector(".addBtn.med.buy");
const largeAddBtnBuy = document.querySelector(".addBtn.large.buy");

const smallMinusBtn = document.querySelector(".minusBtn.small");
const medMinusBtn = document.querySelector(".minusBtn.med");
const largeMinusBtn = document.querySelector(".minusBtn.large");

const smallPizzaQty = document.querySelector(".smallPizzaQty");
const medPizzaQty = document.querySelector(".medPizzaQty");
const largePizzaQty = document.querySelector(".largePizzaQty");

const smallPizzaTotal = document.querySelector(".smallPizzaTotal");
const medPizzaTotal = document.querySelector(".medPizzaTotal");
const largePizzaTotal = document.querySelector(".largePizzaTotal");
const cartTotal = document.querySelector(".cartTotal");

const checkOut = document.querySelector(".checkOut");

const payOut = document.querySelector(".payOut");
const message = document.querySelector(".message");
const payAmt = document.querySelector(".payAmt");
const payBtn = document.querySelector(".payBtn");

const pizzaCart = PizzaCart();

function BtnClicked(event) {
   pizzaCart.BtnClicked(event.target.dataset);

   smallPizzaQty.innerHTML = pizzaCart.qtyUpdate().smallPizzaQty;
   medPizzaQty.innerHTML = pizzaCart.qtyUpdate().medPizzaQty;
   largePizzaQty.innerHTML = pizzaCart.qtyUpdate().largePizzaQty;
   totalCart = smallPizzaQty * 49.00 + medPizzaQty * 89.00 + largePizzaQty * 129.00;

    smallPizzaTotal.innerHTML = pizzaCart.priceUpdate().smallPizzaCost;
    medPizzaTotal.innerHTML = pizzaCart.priceUpdate().medPizzaCost;
    largePizzaTotal.innerHTML = pizzaCart.priceUpdate().largePizzaCost;
    cartTotal.innerHTML = pizzaCart.priceUpdate().totalCart;

    if (totalCart > 0) {
        checkOut.classList.remove('hidden');
    } else {
        checkOut.classList.add('hidden');
        payOut.classList.add('hidden');
    } 
}

function checkOutClick(){
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function payment(){
    message.classList.toggle('hidden');
    var paymentAmt = Number(payAmt.value);
 if (paymentAmt == pizzaCart.priceUpdate().totalCart){
    message.innerHTML = "Enjoy your Pizza!";
    checkOut.classList.remove('hidden');
    pizzaCart.resetCart();
    smallPizzaQty = 0;
    medPizzaQty = 0;
    largePizzaQty = 0;
    totalCart = 0;

    smallPizzaQty.innerHTML = pizzaCart.priceUpdate().resetCart().smallPizzaQty;
    medPizzaQty.innerHTML = pizzaCart.priceUpdate().resetCart().medPizzaQty;
    largePizzaQty.innerHTML = pizzaCart.priceUpdate().resetCart().largePizzaQty;

    smallPizzaTotal.innerHTML = pizzaCart.resetCart().smallPizzaCost;
    medPizzaTotal.innerHTML = pizzaCart.resetCart().medPizzaCost;
    largePizzaTotal.innerHTML = pizzaCart.resetCart().largePizzaCost;
    cartTotal.innerHTML = pizzaCart.resetCart().totalCart;

    setTimeout(function () {
        message.classList.toggle('hidden');
        checkOut.classList.toggle('hidden');
        payOut.classList.add('hidden');
        payAmt.value = "";
    }, 2500);

 } else if (paymentAmt > pizzaCart.priceUpdate().totalCart) {
    var change = paymentAmt - totalCart;
    message.innerHTML = "Enjoy your Pizza, here is your change R" + change.toFixed(2);
    checkOut.classList.remove('hidden');
    pizzaCart.resetCart();
    smallPizzaQty = 0;
    medPizzaQty = 0;
    largePizzaQty = 0;
    totalCart = 0;

    smallPizzaQty.innerHTML = pizzaCart.priceUpdate().resetCart().smallPizzaQty;
    medPizzaQty.innerHTML = pizzaCart.priceUpdate().resetCart().medPizzaQty;
    largePizzaQty.innerHTML = pizzaCart.priceUpdate().resetCart().largePizzaQty;

    smallPizzaTotal.innerHTML = pizzaCart.resetCart().smallPizzaCost;
    medPizzaTotal.innerHTML = pizzaCart.resetCart().medPizzaCost;
    largePizzaTotal.innerHTML = pizzaCart.resetCart().largePizzaCost;
    cartTotal.innerHTML = pizzaCart.resetCart().totalCart;

    setTimeout(function () {
        message.classList.toggle('hidden');
        checkOut.classList.toggle('hidden');
        payOut.classList.add('hidden');
        payAmt.value = "";
    }, 2500);

} else{
    message.innerHTML = "Sorry, that is not enough money!";
    setTimeout(function () {
        checkOut.classList.add('hidden');
        message.classList.toggle('hidden');
    }, 2500);
}
}

smallAddBtn.addEventListener('click', BtnClicked);
smallMinusBtn.addEventListener('click', BtnClicked);
smallAddBtnBuy.addEventListener('click', BtnClicked);

medAddBtn.addEventListener('click', BtnClicked);
medMinusBtn.addEventListener('click', BtnClicked);
medAddBtnBuy.addEventListener('click',BtnClicked);

largeAddBtn.addEventListener('click', BtnClicked);
largeMinusBtn.addEventListener('click', BtnClicked);
largeAddBtnBuy.addEventListener('click',BtnClicked);

checkOut.addEventListener('click', checkOutClick)

payBtn.addEventListener('click', payment)