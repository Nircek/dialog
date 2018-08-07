function addCss(cssCode) {
    // https://stackoverflow.com/a/6211716
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet)
        styleElement.styleSheet.cssText = cssCode;
    else
        styleElement.appendChild(document.createTextNode(cssCode));
    document.getElementsByTagName("head")[0].appendChild(styleElement);
}
addCss(`.alert {
    /* https://stackoverflow.com/a/36717369 */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 32px;
    background-color: cyan;
    border: darkgreen 5px solid;
    padding: 5px;
    z-index: 100;
}
.closebtn {
    /* https://www.w3schools.com/howto/howto_js_alert.asp */
    margin-left: 15px;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}
.closebtn:hover {
    color: black;
}`);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    try {
        if (this.readyState == 4 && this.status == 200) {
            var l = xhttp.responseText.split('\n');
            a = document.createElement('div');
            a.classList.add('alert');
            a.innerHTML = '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&#x00d7;</span><strong>'+l[1]+'</strong><br>'+l[2];
            document.body.appendChild(a);
        }
    } catch(e){}
};
xhttp.open("GET", "info.xml", true);
xhttp.send()
