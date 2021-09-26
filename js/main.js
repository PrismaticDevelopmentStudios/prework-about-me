function bigImg1() {
    document.getElementById('one').style.fontWeight = "600";
    console.log('big')
}

function normalImg1() {
    document.getElementById('one').style.fontWeight = "100";;
}

function bigImg2() {
    document.getElementById('two').style.fontWeight = "600";
    console.log('big')
}

function normalImg2() {
    document.getElementById('two').style.fontWeight = "100";;
}

function bigImg3() {
    document.getElementById('three').style.fontWeight = "600";
    console.log('big')
}

function normalImg3() {
    document.getElementById('three').style.fontWeight = "100";;
}

function bigImg4() {
    document.getElementById('four').style.fontWeight = "600";
    console.log('big')
}

function normalImg4() {
    document.getElementById('four').style.fontWeight = "100";;
}

function bigImg5() {
    document.getElementById('five').style.fontWeight = "600";
    console.log('big')
}

function normalImg5() {
    document.getElementById('five').style.fontWeight = "100";;
}

function bigImg6() {
    document.getElementById('six').style.fontWeight = "600";
    console.log('big')
}

function normalImg6() {
    document.getElementById('six').style.fontWeight = "100";;
}

function mobile() {
    if (window.innerWidth <= 1200) {
        document.getElementById('standard').style.display = "none";
        document.getElementById('mobile').style.display = "block";
        console.log('Mobile version', window.innerWidth)
    } else if (window.innerWidth >= 1200) {
        document.getElementById('standard').style.display = "block";
        document.getElementById('mobile').style.display = "none";
        console.log('Nonmobile version', window.innerWidth)
    }
    console.log(window.innerWidth)
}