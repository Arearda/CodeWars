//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//I can be placed before V (5) and X (10) to make 4 and 9. 
//X can be placed before L (50) and C (100) to make 40 and 90. 
//C can be placed before D (500) and M (1000) to make 400 and 900.
//Given a roman numeral, convert it to an integer.

const romanToInt = function (s) {
    // Map to store romans numerals
    const romanMap = new Map();
    // Fill the map
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    // Length of the given string
    const n = s.length;
    // Variable to store result
    let num = romanMap.get(s[n - 1]);
    // Loop for each character from right to left
    for (let i = n - 2; i >= 0; i--) {
        // Check if the character at right of current character is
        // bigger or smaller
        if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
            num += romanMap.get(s[i]);
        } else {
            num -= romanMap.get(s[i]);
        }
    }
    return num;
};