// const original_price = null;
// const discount_percentage = nulll;
// const price_after_discount = null;

function calculateDiscount(){
    const original_price = parseFloat(document.getElementById("original_price").value);
    const discount_percentage = parseFloat(document.getElementById("percentage").value)

    if(isNaN(original_price) || isNaN(discount_percentage)){
        document.getElementById("discount_price").textContent = "Invalid input please enter number";
        return;
    }

    const discount_price = original_price - (original_price * (discount_percentage / 100));
    document.getElementById("discount_price").textContent = discount_price.toFixed(2);
}