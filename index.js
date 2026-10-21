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

let isClicked = false;
let sidebarSpacing = 20;
function burger() {
    if (!isClicked) {
        let curVal = document.querySelectorAll(".side");
        let width = curVal.width;
        width.src = 20;

    } else {
        let curVal = document.querySelectorAll(".entire");
        let widthMarg = curVal.margin-left;
        width.src = 20;
    }

}
function onburg() {
    document.getElementById()
}

function dropdown(getdown) {
    let i = "#" + getdown;
    window.location.href = i;

}
