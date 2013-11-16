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
    var dictionary = [];

    for(var i = 0; i < 9; i++)
        dictionary.push(Array(i+2).join(one));

    return ['+[]'].concat(dictionary);
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
function JavaScript(text, obscene) {

    var key_length  = 16;
    var key         = random_key(key_length);
    var cipher      = encode(text, key);
    var JS          = '';

    // obscene obfuscation flag
    obscene = typeof obscene === 'undefined' || obscene == null ? false : obscene;

    // obfuscate the cipher and the key, if necessary
    if(obscene) {
        fubar_array(cipher);
        fubar_array(key);
    }

    // construct the self-decrypting pseudo string of text
    JS  = "var _='';for(var $="
        + (obscene ? fubar(0) : 0)
        +';$<'
        + (obscene ? fubar(text.length) : text.length)
        +';$++)_+=String.fromCharCode(['
        + cipher.toString()
        +'][$]^['
        + key.toString()
        + '][$%'
        + (obscene ? '(' + fubar(key.length) +')' : key.length)
        + ']);';

    JS = '(function(){' + JS + 'return _;})()'

    return JS;
}
