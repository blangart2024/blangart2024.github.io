// JavaScript source code

const examMinWidth = 100;
const examMinHeight = 100;

const examMaxWidthPerc = 0.9;
const examMaxHeightPerc = 0.9;

const examWidthPad = 30;
const examHeightPad = 30;

let inquiryIsOpen = false;
let curId = -1;

const breakLineMargin = 16;

var curExamSrc = "NONE";

const artTitles = [
    "'Name of Piece 1'",
    "'A Long Name of the Second'",
    "'A Longer Name of the Third Art Piece'",
    "'A Very Long Exceptional Name of the fourth Piece'",
    "'Short Name'",
    "'Shorter'",
    "'A'",
    "'Name of Piece'",
    "'Name of Piece'",
    "'Name of Piece'",
    "'Name of Piece'"
];

var aJsonData = {
    "artpieces": [
        {
            "name": "Nature's Beauty",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.625,
                    "width": 24,
                    "height": 32
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10.04,
                            "1": 20.04,
                            "2": 50.04
                        }
                    ]
                }
            ]
        },

        {
            "name": "Picklemen",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 1.5,
                    "width": 20,
                    "height": 30
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        },

        {
            "name": "Hillside",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 30,
                    "height": 24
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10.03,
                            "1": 20.03,
                            "2": 50.03
                        }
                    ]
                }
            ]
        },

        {
            "name": "Neptunian Dance",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 24,
                    "height": 28
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10.01,
                            "1": 20.01,
                            "2": 50.01
                        }
                    ]
                }
            ]
        },

        {
            "name": "Grassy Meadow",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 24,
                    "height": 30
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 50,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        },

        {
            "name": "Persephone",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.625,
                    "width": 18,
                    "height": 24
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        },

        {
            "name": "Vesuvius",
            "medium": "oil",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 24,
                    "height": 36
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        },

        {
            "name": "Melting Lilly",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 22,
                    "height": 29
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 50,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        },

        {
            "name": "Gottlieb",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 20,
                    "height": 24
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 50,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        },

        {
            "name": "Tea",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 6,
                    "height": 4
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        },

        {
            "name": "IceTown",
            "medium": "Oil on canvas",
            "dims": [
                {
                    "depth": 0.75,
                    "width": 6,
                    "height": 4
                }
            ],
            "prodvers": [
                {
                    "original": [
                        {
                            "price": "AS",
                            "available": 1
                        }
                    ],
                    "prints": [
                        {
                            "0": 10,
                            "1": 20,
                            "2": 50
                        }
                    ]
                }
            ]
        }
    ]
}

const headerHTML = "<h1 class=\"titleheader\" id=\"titleheader\" onclick = \"clickedHeader()\"> Bob Lang Art</h1><div class=\"navigation\" id = \"navigation\">\n<div class=\"navitem navhome\" onclick=\"clickedHome()\" >\n<p>Home</p>\n</div>\n<div class=\"navitem navcontact\" onclick=\"clickedContact()\">\n<p>Contact Information</p>\n</div>\n<div class=\"navitem navabout\" onclick=\"clickedAbout()\" >\n<p>About</p>\n</div>\n</div>";
const headerHTML2 = "<h1 class=\"titleheader\" id=\"titleheader\" onclick = \"clickedHeader()\"> Bob Lang Art</h1><div class=\"navigation\" id = \"navigation\">\n";

var curHtmlStr = "";
function addNavElem(className, text, htmlFile) {
    let htmlStr = "";
    htmlStr += "<div class=\"navitem " + className + "\"onclick=\"openHtml('" + htmlFile + "')\"><p>" + text + "</p></div>";
    document.getElementById("header").innerHTML
    return htmlStr;
}
function setHeader() {
    var header = document.getElementById("header");
    header.innerHTML = headerHTML2;
   // var navigation = document.getElementById("navigation");
    //navigation.innerHTML += addNavElem("navhome", "Home", "main");
    //navigation.innerHTML += addNavElem("navcontact", "Contact Information", "main");
    //navigation.innerHTML += addNavElem("navabout", "About", "main");
    //navigation.innerHTML += addNavElem("navcart", "Shopping Cart", "cart");


    document.getElementById("titleheader").style.cursor = "pointer";

    var navVar = document.getElementById("navigation");
    navVar.style.backgroundColor = "#fdb347";
    navVar.style.display = "flex";
    navVar.style.justifyContent = "center";

    var navItems = document.getElementsByClassName("navitem");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.margin = "0px 50px 0px 50px";
        navItems[i].style.padding = "0px 15px 0px 15px";
        navItems[i].style.color = "#0245A8";
        navItems[i].style.textDecoration = "wavy";
        navItems[i].style.fontStyle = "italic";
        navItems[i].addEventListener("mouseout", function () { disableNavItemHover(navItems[i]) });
        navItems[i].addEventListener("mouseover", function () { navItemHover(navItems[i]) });
    }
    
}

function navItemHover(item) {
    console.log("Detected nav item hover");
    item.style.color = "#4791FD";
    item.style.cursor = "pointer";
    item.style.textDecoration = "underline";
}

function disableNavItemHover(item) {
    console.log("Detected nav item hover exit");
    item.style.color = "#0245A8";
    item.style.cursor = "pointer";
    item.style.textDecoration = "";
}

function openHtml(name) {
    location.replace("./" + name + ".html");
}

function clickedHeader() {
    location.replace("./main.html");
}

function clickedHome() {
    location.replace("./main.html");
}

function clickedContact() {
    location.replace("./main.html");
}

function clickedAbout() {
    location.replace("./main.html");
}
function getPicDims(id) {
    var image = new Image();
    image.src = document.getElementById(id).getAttribute("src");
    let res = [];
    res.push(image.width, image.height);
    return res;
}
function clickedMask() {
    console.log("Clicked mask...");
    if (inquiryIsOpen) {
        return;
    }
    var mask = document.getElementById("mask");
    var exam = document.getElementById("examine");

    mask.style.zIndex = -1;
    mask.style.opacity = "0.0";

    exam.style.zIndex = -1;
    exam.style.opacity = "0.0";

}
function getExamWindDims(image) {
    let dims = [];
    dims.push(image.width);
    dims.push(image.height);

    let width = image.width + examWidthPad;
    let height = image.height + examHeightPad;
    if (width < examMinWidth) {
        dims.push(examMinWidth);
    }

    else if (width > examMaxWidthPerc * window.innerWidth) {
        dims.push(examMaxWidthPerc * window.innerWidth);
    }

    else {
        dims.push(width);
    }

    if (height < examMinHeight) {
        dims.push(examMinHeight);
    }

    else if (height > examMaxHeightPerc * window.innerHeight) {
        dims.push(examMaxHeightPerc * window.innerHeight);
    }

    else {
        dims.push(height);
    }

    return dims;
}
function getArrayNum(id) {
    let idStr = "";
    let res = "";
    idStr = id;
    for (let a = 1; a < idStr.length; a++) {
        res += idStr[a];
    }

    return parseInt(res, 10) - 1;
}
function clickedArt(id) {
    console.log("Clicked: " + id);
    var image = new Image();
    image.src = document.getElementById(id).getAttribute("src");
    let dims = getExamWindDims(image);
    console.log("Image Raw Dims: (", dims[0] + "," + dims[1] + ")");
    console.log("Exam Window dims: (", dims[2] + "," + dims[3] + ")");

    var mask = document.getElementById("mask");
    var exam = document.getElementById("examine");
    var examImg = document.getElementById("examImg");
    curId = getArrayNum(id);
    document.getElementById("pieceTitle").innerHTML = artTitles[curId];

    examImg.src = image.src;
    examImg.style.maxWidth = (dims[2] - examWidthPad) + "px";
    examImg.style.maxHeight = (dims[3] - examHeightPad) + "px";
    console.log("Height: " + examImg.clientHeight);
    console.log("Width: " + examImg.clientWidth);

    mask.style.zIndex = 1;
    mask.style.opacity = "0.8";

    exam.style.zIndex = 2;
    exam.style.opacity = "1.0";

    exam.style.width = examImg.clientWidth + "px";
    exam.style.height = examImg.clientHeight + document.getElementById("examInfo").clientHeight + "px";


}
function clickedInterested() {
    let Name = artTitles[curId];
    var Inquiry = document.getElementById("inquiry");
    Inquiry.style.display = "inline";
    Inquiry.style.zIndex = 3;
    inquiryIsOpen = true;
}
function exitInquiry() {
    document.getElementById("inquiry").style.display = "none";
    inquiryIsOpen = false;
}
function clickedArt2(id) {
    curExamSrc = document.getElementById(id).getAttribute("src");
}
function onArtHover(id) {
    console.log("Got Hover on " + id);
    console.log("before: " + curExamSrc);
    curExamSrc = document.getElementById(id).getAttribute("src");
    console.log("after: " + curExamSrc);
}
function onArtClick(id) {
    console.log("Got click on " + id);
    console.log("Got source: " + document.getElementById(id).getAttribute("src"));
    sessionStorage.setItem('bobartsrc', document.getElementById(id).getAttribute("src"));
    sessionStorage.setItem('artID', id);
    sessionStorage.setItem('aJsonData', JSON.stringify(aJsonData.artpieces[getArrayNum(id)]));
    location.replace("./info.html");
}

window.onload = function() {
    console.log("json data:\n" + aJsonData.artpieces[0].name);
    setHeader();
}
