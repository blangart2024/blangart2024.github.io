// JavaScript source code

const examMarginTop = 10;
const magRelScale = 0.9;
const canvasScale = 0.1;


var prices = [5000, 10, 20, 50];
var examPicDims = [100,100];
var imgSrc = "";

function clickedArt_info() {
    document.getElementById("fullimg").src = imgSrc;
   // document.getElementById("fullimgview").style.display = "block";
    document.getElementById("sepline").style.display = "none";
}

function closeFullView() {
    document.getElementById("fullimgview").style.display = "none";
    document.getElementById("sepline").style.display = "block";
}

function clickedArt_Close() {
    document.getElementById("fullimg").src = "";
    document.getElementById("sepline").style.display = "block";
}

function mouseExitsArt() {
    var cExam = document.getElementById("closeexamine");
    cExam.style.opacity = 0.0;
    document.getElementById("magview").style.display = "none";
    document.getElementById("infocontainer").style.display = "block";
}
function mousePosition() {
    var pRect = document.getElementById("artimage").getBoundingClientRect();
    var cExam = document.getElementById("closeexamine");
    cExam.style.opacity = 1.0; 
    let Mx = event.pageX;
    let My = event.pageY;

    let eaWAr = (examPicDims[0] / (pRect.right - pRect.left)) / 2;
    let eaHAr = (examPicDims[1] / (pRect.top - pRect.bottom)) / 2;

    let percX = (Mx - pRect.left) / (pRect.right - pRect.left);
    let percY = (My - pRect.bottom) / (pRect.top - pRect.bottom);
    cExam.style.top = (My) + "px";
    cExam.style.left = (Mx) + "px";
    //console.log("(x,y): " + Mx + "," + My + ", Perc: " + percX + "," + percY);

    var magImg = document.getElementById("magimageview");
    magImg.style.transform = "translate(" + 100 * (-percX + eaWAr) + "%," + 100 * (percY - 1 - eaHAr) + "%)";

    document.getElementById("magview").style.display = "block";
    document.getElementById("infocontainer").style.display = "none";
}
function setPieceInfo(data) {
    var jData = JSON.parse(sessionStorage.getItem('aJsonData'));
    var title = document.getElementById("piecetitle");
    var dims = document.getElementById("dims");
    var med = document.getElementById("med");
    var price = document.getElementById("price");
    var picID = document.getElementById("formPicID");
    picID.value = sessionStorage.getItem('artID');
    title.innerHTML = "'" + jData.name + "'";
    // dims.innerHTML = "Dimensions(inches) &lt; " + jData.dims[0].width + " &times; " + jData.dims[0].height + " &gt;";
    dims.innerHTML = "Dimensions(inches): " + jData.dims[0].width + " &times; " + jData.dims[0].height + " &times; " + jData.dims[0].depth;
    med.innerHTML = "Type: " + jData.medium;
    if (jData.prodvers[0].original[0].price == "AS") {
        price.innerHTML = "Available Soon!";
    }
    else {
        price.innerHTML = "$" + jData.prodvers[0].original[0].price;//"$" + prices[0] + ".00";
    }


}

function windowResize() {
   /* document.getElementById("examinebox").style.height = window.innerHeight - (document.getElementById("header").offsetHeight + document.getElementById("footer").offsetHeight + breakLineMargin + examMarginTop) + "px";*/
    //document.getElementById("magview").style.height = document.getElementById("infobox").clientHeight * magRelScale + "px";
    //document.getElementById("magview").style.width = document.getElementById("infobox").clientWidth * magRelScale + "px";
    console.log("Resizing...");
}
window.onload = function () {

    document.getElementById("artimage").src = sessionStorage.getItem('bobartsrc');
    imgSrc = sessionStorage.getItem('bobartsrc');
    //var aVar = JSON.parse(sessionStorage.getItem('aJsonData'));

    setPieceInfo(sessionStorage.getItem('aJsonData'));

    let height = 675;/*window.innerHeight - (document.getElementById("header").offsetHeight + document.getElementById("footer").offsetHeight + breakLineMargin + examMarginTop);*/
   // document.getElementById("bottom-line").style.marginTop = breakLineMargin / 2 + "px";
    //document.getElementById("bottom-line").style.marginBottom = breakLineMargin / 2 + "px";
   // document.getElementById("examinebox").style.marginTop = examMarginTop + "px";
   // document.getElementById("examinebox").style.height = height + "px";
    setHeader();

}
function onImgLoad() {
    let dims = getPicDims("artimage");
    console.log("Got dims: " + dims[0] + "," + dims[1]);
    var pic = document.getElementById("artimage");
   // pic.addEventListener("mousemove", mousePosition);

}

