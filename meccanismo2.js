var iframe = document.getElementById("myFrame");

function displayArticle(file) {
    iframe.src = file;
}

function applyStyle(theme) {
    var head  = iframe.contentDocument.querySelector("head");
    console.log("Stile applicato");
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '';
    link.id = 'activeStyle';
    $("#myFrame").contents().find("#activeStyle").remove();

    head.appendChild(link).href = theme;
}

