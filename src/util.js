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
    const month = ["January", "February", "March", "April", 
                    "May", "June", "July", "August", 
                    "September", "October", "November", "December"];
    const dateArr = date.split('/');
    return month[dateArr[1]-1] + " " + dateArr[0] + ", " + dateArr[2];
}