// calculate discount amount
function discount_amount(gross_amount, discount_rate) {
    return gross_amount * (discount_rate / 100);
}

// calculate amount before tax
function amount_before_tax(gross_amount, discount_amount) {
    return gross_amount - discount_amount;
}

// calculate tax amount
function tax_amount(amount_before_tax, tax_rate) {
    return amount_before_tax * (tax_rate / 100);
}

// calculate net amount
function net_amount(amount_before_tax, tax_amount) {
    return amount_before_tax + tax_amount;
}

let gross_amount = 10000
let discount_rate = 10
let tax_rate = 10

let d_amount = discount_amount(gross_amount, discount_rate)
let abt_tax = amount_before_tax(gross_amount, d_amount)
let t_amount = tax_amount(abt_tax, tax_rate)


let n_amount = net_amount(abt_tax, t_amount)

console.log(`Gross Amount: ${gross_amount} \nDiscount Amount: ${d_amount} \nAmount Before Tax: ${abt_tax} \nTax Amount: ${t_amount} \nNet Amount: ${n_amount}`)
