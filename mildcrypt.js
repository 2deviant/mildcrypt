// this application does not necessitate cryptographic quality random numbers
// low quality, barely uniform implementation of Math.random() will do
function random_key(length) {
    var key = [];
    while(length--)
        key.push(Math.round(Math.random()*255));
    return key;
}

// cipher = text ^ key
function encode(text, key) {
    var cipher = [];
    for(var i = text.length; i-->0;)
        cipher[i] = text.charCodeAt(i) ^ key[i % key.length];
    return cipher;
}

// obfuscator dictionary, see http://www.jsfuck.com 
function obfuscator() {

    var one = '+!+![]';
    var dictionary = {};
    var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for(var i in digits)
        dictionary[digits[i]] = Array(digits[i]+1).join(one);

    dictionary[0] = '+[]';

    return dictionary;
}

// number obfuscator
function fubar(x) {

    var garbage = [];

    // obtain the obfuscator dictionary
    var dictionary = obfuscator();

    // convert the number to a string
    x = x.toString();

    // obfuscate the number digit by digit
    for(var i = 0; i < x.length; i++)
        garbage.push('['+dictionary[x[i]]+']');

    return garbage.join('+');

}

// self-explanatory
function fubar_array(array) {
    for(var i = array.length; i-->0;)
        array[i] = fubar(array[i]);
}



// create a JavaScirpt MildCrypt
function JavaScript(text) {

    var key_length  = 16;
    var key         = random_key(key_length);
    var cipher      = encode(text, key);
    var JS          = '';

    // obfuscate the cipher and the key
    fubar_array(cipher);
    fubar_array(key);

    // construct the self-decrypting pseudo string of text
    JS  = 'var _=""; var __=['
        + cipher.toString()
        + '];for(var $ in __)_+=String.fromCharCode(__[$]^['
        + key.toString()
        + '][$%'
        + key.length
        + ']);';

    JS = '(function() {' + JS + 'return _;})()'

    return JS;
}
