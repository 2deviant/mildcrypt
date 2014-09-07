
/*
 *
 * MildCrypt Text Obfuscator v0.12 by Val Tenyotkin (val@tenyotk.in)
 *
 */

//var obfuscationary = 'аacсϲoοоpрeеАACСϹOОΟPРΡEЕ3ЗMМΜⅯHНΗKКxхⅹΧХXⅩBΒВ!ǃƼ5ǀ|‚,;;:∶SЅsѕTΤТ';
//var obfuscationary = '┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋';
var obfuscationary = 'ꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꞪꜢꜣꜤꜥꜨꝐꝑꝒꝓꝔꝕꝖꝗꝘꝙꝜꝝꝞꝟꜩꜪꜫꝠꝡꝢꝣꝤꝥꝦꝧꝨꝩꝪꝫꝬꝭꝮꝯꝰꝱꝲꝳꝴꝵꝶꝷꝸꝹꝺꝻꝼꝽꝾꝿ';
var b64dictionary  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

// self-explanatory
function obfuscate(input, forward, reverse) {
    var output = '';
    for(var i = 0; i < input.length; i++)
        output += reverse[forward.indexOf(input[i])];
    return output;
}

// self-explanatory
function encode(text) {
    return obfuscate(btoa(text), b64dictionary, obfuscationary);
}

/*
 *
 *  PURPOSE
 *
 *      Create a self-decrypting pseudo-string in JavaScript.
 *
 *  USE
 *
 *      var encrypted = JavaScript('O brother where art thou?');
 *
 *  RETURN
 *
 *      A self-decrypting pseudo-string in JavaScript is returned.  The returned
 *      entity can be used in place of any JavaScript string.
 *
 */

function JavaScript(text) {

    var encoded = encode(text);

    return '(function(){var _="",i=0'
        + ',f="' + obfuscationary + '"'
        + ',r="' + b64dictionary  + '"'
        + ',$="' + encoded        + '";'
        + 'while(i<'+encoded.length+')'
        + '_+=r[f.indexOf($[i++])];return atob(_);})()';
}


/*
 *
 *  PURPOSE
 *
 *      Create a self-decrypting pseudo-string in PHP.
 *
 *  USE
 *
 *      $junk = PHP('Four score and seven years ago...');
 *
 *  RETURN
 *
 *      A self-decrypting pseudo-string in PHP is returned.  The returned entity
 *      can be used in place of any PHP string.
 *
 */

function PHP(text) {
    return "base64_decode(str_replace(preg_split('//u','"
        + obfuscationary
        + "'), preg_split('//',join(range(A,Z)).join(range(a,z)).'0123456789+/='),'"
        + encode(text)
        + "'));";
}


/*
 *
 *  PURPOSE
 *
 *      Create a self-decrypting pseudo-string in Python.
 *
 *  USE
 *
 *      $junk = Python('The only thing we have to fear, is fear itself.');
 *
 *  RETURN
 *
 *      A self-decrypting pseudo-string in Python is returned.  The returned entity
 *      can be used in place of any Python string.
 *
 *      NOTE.  Python requires explicit encoding specification at the top of the
 *      interpretable:
 *
 *          # coding: utf-8
 *
 *      and a base64 library:
 *
 *          import base64
 *
 */

function Python(text) {
    return "# coding: utf-8<br/>import base64<br/>"
        + "base64.b64decode(''.join([(''.join(map(chr,range(65,91)+range(97,123)))+'0123456789+/=')[u'"
        + obfuscationary
        + "'.index(i)] for i in u'"
        + encode(text)
        + "']))";
}
