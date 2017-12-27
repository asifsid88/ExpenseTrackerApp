export function getCurrencySymbol(currencyCode) {
    switch(currencyCode) {
        case "INR":
            return String.fromCharCode(parseInt('0x20B9', 16));
        case "USD":
            return String.fromCharCode(parseInt('0x0024', 16));
        default:
            return String.fromCharCode(parseInt('0x20B9', 16)); // Default INR
    }
}

export function getVerbalDate(date) {
    return "November 23, 2017";
}