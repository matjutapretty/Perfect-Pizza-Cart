function PizzaCart() {

    let smallQty = 0;
    let medQty = 0;
    let largeQty = 0;

    let smallCost = 0;
    let medCost = 0;
    let largeCost = 0;
    let totalCart = 0;

    function BtnClicked(event) {
        //event = event || window.event;
       //var target = event.target || event.srcElement;
        if (event === "smallAdd") {
            smallQty++;
        } else if (event === "medAdd") {
            medQty++;
        } else if (event === "largeAdd") {
            largeQty++;
        }
        if (event === "smallMinus") {
            smallQty--;
            if (smallQty < 0) {
                smallQty = 0;
            }
        } else if (event === "medMinus") {
            medQty--;
            if (medQty < 0) {
                medQty = 0;
            }
        } else if (event === "largeMinus") {
            largeQty--;
            if (largeQty < 0) {
                largeQty = 0;
            }
        }
    }
    function qtyUpdate() {
        return {
            smallQty,
            medQty,
            largeQty
        }
    }

    function priceUpdate() {
        smallCost = (smallQty * 49).toFixed(2);
        medCost = (medQty * 89).toFixed(2);
        largeCost = (largeQty * 129).toFixed(2);
        totalCart = (smallQty * 49.00 + medQty * 89.00 + largeQty * 129.00).toFixed(2);

        return {
            smallCost,
            medCost,
            largeCost,
            totalCart
        }
    }
    function change(amount) {
        return (amount - totalCart).toFixed(2);
    }

    function resetCart() {
        smallQty = 0;
        medQty = 0;
        largeQty = 0;
        smallCost = 0;
        medCost = 0;
        largeCost = 0;
        totalCart = 0;

        return {
            smallQty,
            medQty,
            largeQty,
            smallCost,
            medCost,
            largeCost,
            totalCart,
        }
    }

    return {
        BtnClicked,
        qtyUpdate,
        priceUpdate,
        change,
        resetCart,
    }


    }