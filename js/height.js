
function changeheight(classname) {
    var maxheight = 0;
    var presentheight = 0;

    var x = document.getElementsByClassName(classname);

    for (i = 0; i < x.length; i++) {

        presentheight = x[i].offsetHeight;

        if (presentheight > maxheight) {
            maxheight = presentheight;
        }

       // x[i].style.display = "none";
    }

    for (i = 0; i < x.length; i++) {

        x[i].style.height = maxheight + "px";
    }

}

function updateheight(classname) {
    setInterval(function() {changeheight(classname)}, 100);
}



updateheight("sameheight")
updateheight("sameheightblog")