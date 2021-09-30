/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    // for (let i = 0; i < address.length; i++) {
    //     if (address[i] === '.') {
    //         address[i].replace('[.]');
    //     }
    // }
   let address1 = address.replaceAll('.', '[.]')
    return address1;
};