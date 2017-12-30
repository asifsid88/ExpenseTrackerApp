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

/**
 * Returns date in verbose format: 23/11/1988 will be emitted as November 23, 1988
 * @param {*} date: Should be of format DD/MM/YYYY 
 */
export function getVerbalDate(date) {
    const month = ["January", "February", "March", "April", 
                    "May", "June", "July", "August", 
                    "September", "October", "November", "December"];
    const dateArr = date.split('/');
    return month[dateArr[1]-1] + " " + dateArr[0] + ", " + dateArr[2];
}

export function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    } 
    if(mm<10) {
        mm='0'+mm;
    } 
    return dd+'/'+mm+'/'+yyyy;
}