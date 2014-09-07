
// prevents re-encryption of unchanged content
var previous_cleartext = '';

// wrapper for HTML inlining
function JavaScriptWrap(text) {
    return '&lt;script type="text/javascript"&gt;document.writeln('
        + JavaScript(text)
        + ')&lt;/script&gt';
}

// create an output window if it doesn't already exist
function create_if_none(id, content) {

    var div;

    // if the container doesn't exist, create it
    if(!(div = document.getElementById(id))) {

        // find the output division of the page
        var output = document.getElementById('input');

        // create the output container
        div = document.createElement('div');
        div.id = id;
        div.innerHTML = content;

        // attach it to the main DIV
        output.appendChild(div);

        // "show" it
        setTimeout(function() {
            div.classList.add('show')
        }, 1);


    }
    // otherwise just update the contents
    else
        div.innerHTML = content;
}

// self-explanatory
function encrypt() {

    // string to be encoded
    var cleartext = document.getElementById('text').value;

    // if the text hasn't changed, do nothing
    if(cleartext === previous_cleartext)
        return;
    else
        previous_cleartext = cleartext;

    var functions = [
        JavaScriptWrap,
        JavaScript,
        PHP,
        Python
    ];

    // loop through the obfuscations
    for(var i in functions)
        create_if_none(
            // function name and DIV ID
            functions[i].name,
            // contents
            functions[i](cleartext)
        );
}

