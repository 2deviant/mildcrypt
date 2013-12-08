var previous_cleartext = '';

// wrapped for HTML inlining
function JavaScriptWrap(text) {
    return '&lt;script type="text/javascript"&gt;document.writeln(' + JavaScript(text) + ')&lt;/script&gt';
}

function create_if_none(id, label, content) {

    var div;

    // if the container doesn't exist, create it
    if(!(div = document.getElementById(id))) {

        // find the output division of the page
        var output = document.getElementById('output');

        // create the label
        $_({
            tag: 'span',
            html: label,
            parent: output
        });

        // create the content container
        $_({
            id: id,
            tag: 'div',
            html: content,
            parent: $_({
                tag: 'div',
                class: 'wrapper',
                parent: output
            })
        });
    }
    // otherwise just update the contents
    else
        div.innerHTML = content;

}

function encrypt() {

    // string to be encoded
    var cleartext = document.getElementById('text').value;

    // if the text hasn't change, do nothing
    if(cleartext === previous_cleartext)
        return;
    else
        previous_cleartext = cleartext;

    var functions = [
        ['JavaScriptWrap',  'JavaScript: HTML inline'],
        ['JavaScript',      'JavaScript'],
        ['PHP',             'PHP']
    ];

    // loop through the obfuscations
    for(var i = functions.length; i-->0;)
        create_if_none(
            // function name and DIV ID
            functions[i][0],
            // label
            functions[i][1],
            // contents
            window[functions[i][0]](cleartext)
        );
}

addOnLoad(function() {
    document.getElementById('text').focus();
});
