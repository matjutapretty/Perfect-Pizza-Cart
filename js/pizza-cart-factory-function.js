function PizzaCart() {

    let smallPizzaQty = 0;
    let medPizzaQty = 0;
    let largePizzaQty = 0;

    let smallPizzaCost = 0;
    let medPizzaCost = 0;
    let largePizzaCost = 0;
    let totalCart = 0;

    function BtnClicked(event) {
        if (event === "smallAdd") {
            smallPizzaQty++;
        } else if (event === "medAdd") {
            medPizzaQty++;
        } else if (event === "largeAdd") {
            largePizzaQty++;
        }
        if (event === "smallMinus") {
            smallPizzaQty--;
            if (smallPizzaQty < 0) {
                smallPizzaQty = 0;
            }
        } else if (event === "medMinus") {
            medPizzaQty--;
            if (medPizzaQty < 0) {
                medPizzaQty = 0;
            }
        } else if (event === "largeMinus") {
            largePizzaQty--;
            if (largePizzaQty < 0) {
                largePizzaQty = 0;
            }
        }
    }
    function qtyUpdate() {
        return {
            smallPizzaQty,
            medPizzaQty,
            largePizzaQty
        }
    }

    function priceUpdate() {
        smallPizzaCost = (smallPizzaQty * 49).toFixed(2);
        medPizzaCost = (medPizzaQty * 89).toFixed(2);
        largePizzaCost = (largePizzaQty * 129).toFixed(2);
        totalCart = (smallPizzaQty * 49.00 + medPizzaQty * 89.00 + largePizzaQty * 129.00).toFixed(2);

        return {
            smallPizzaCost,
            medPizzaCost,
            largePizzaCost,
            totalCart
        }
    }
    function change(amount) {
        return (amount - totalCart).toFixed(2);
    }

    function restartCart() {
        smallPizzaQty = 0;
        medPizzaQty = 0;
        largePizzaQty = 0;
        smallPizzaCost = 0;
        medPizzaCost = 0;
        largePizzaCost = 0;
        totalCart = 0;

        return {
            smallPizzaQty,
            medPizzaQty,
            largePizzaQty,
            smallPizzaCost,
            medPizzaCost,
            largePizzaCost,
            totalCart,
        }
    }

    return {
        BtnClicked,
        qtyUpdate,
        priceUpdate,
        change,
        restartCart,
    }


    }