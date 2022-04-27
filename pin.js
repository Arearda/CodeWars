// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  return typeof pin === 'string' && // pin is a string
    Number.isInteger(+pin) && // string is an integer when converted into string
    [4, 6].includes(pin.length); 
    //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.