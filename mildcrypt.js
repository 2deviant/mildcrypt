
/*
 *
 * MildCrypt Text Obfuscator v0.1 by Val Tenyotkin (val@tenyotk.in)
 *
 */

/*
 *  DECLARATION
 *
 *      JavaScript(text, obscene)
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

    // encode with base64 then obfuscate
    var encoded = obfuscate(btoa(text), b64dictionary, obfuscationary);

    // construct the self-decrypting JS
    var JS  = ',f="' + obfuscationary + '"'
            + ',r="' + b64dictionary  + '"'
            + ',$="' + encoded        + '";'
            + 'while(i<'+encoded.length+')'
            + '_+=r[f.indexOf($[i++])];'

    return '(function(){var _="",i=0' + JS + 'return atob(_);})()'
}


//var obfuscationary = 'аacсϲoοоpрeеАACСϹOОΟPРΡEЕ3ЗMМΜⅯHНΗKКxхⅹΧХXⅩBΒВ!ǃƼ5ǀ|‚,;;:∶SЅsѕTΤТ';
//var obfuscationary = '┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋';
var obfuscationary = 'ꞠꞡꞢꞣꞤꞥꞦꞧꞨꞩꞪꜢꜣꜤꜥꜨꝐꝑꝒꝓꝔꝕꝖꝗꝘꝙꝜꝝꝞꝟꜩꜪꜫꝠꝡꝢꝣꝤꝥꝦꝧꝨꝩꝪꝫꝬꝭꝮꝯꝰꝱꝲꝳꝴꝵꝶꝷꝸꝹꝺꝻꝼꝽꝾꝿ';
var b64dictionary  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function obfuscate(input, forward, reverse) {
    var output = '';
    for(var i = 0; i < input.length; i++)
        output += reverse[forward.indexOf(input[i])];
    return output;
}


/*
 *  DECLARATION
 *
 *      PHP(text)
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

}

