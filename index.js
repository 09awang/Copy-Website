const imgs = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10", "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"];
let val = 0;
function leftclick() {
    if (val == 0) {
        val = 2;
    } else {
        val--;
    }
    const img = document.getElementById("caraimgs");
    img.src = imgs[val];

}
function rightclick() {
    if(val==2) {
        val = 0;
    } else {
        val++;
    }
    const img = document.getElementById("caraimgs");
    img.src = imgs[val];
}

function onburg() {
    if (document.getElementById("side").style.display === "flex") {
        document.getElementById("burg").style.color = "white";
        document.getElementById("burg").style.borderColor = "white";
        document.getElementById("side").style.display = "none";
        document.getElementById("entire").style.paddingLeft = "0%";

    }
    else{
        document.getElementById("burg").style.color = "black";
        document.getElementById("burg").style.borderColor = "black";
        document.getElementById("side").style.display = "flex";
        document.getElementById("entire").style.paddingLeft = "20%"
    }
}

function dropdown(getdown) {
    let i = "#" + getdown + "1";
    window.location.href = i;
}

function  checkCourse() {
    if (document.getElementById("downDown").style.display === "none") {
        document.getElementById("downDown").style.display = "block";
    }
    else {document.getElementById("downDown").style.display = "none";}
}

function secondInternal(where) {
    let i = "#" + where + "1";
    window.location.href = i;
}

