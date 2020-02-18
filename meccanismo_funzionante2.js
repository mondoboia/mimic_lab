var iframe = document.getElementById("myFrame");
var selectedStyle;

iframe.onload = function() {
    if(selectedStyle) {
        applyStyle(selectedStyle);
    }
};

function displayArticle(file) {
    iframe.src = file;
}

function applyStyle(theme) {
    var head  = iframe.contentDocument.querySelector("head");
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '';
    link.id = 'activeStyle';
    $("#myFrame").contents().find("#activeStyle").remove();
    
    selectedStyle = theme;

    head.appendChild(link).href = theme;
}