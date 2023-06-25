// **********************************************scroll****************************************
let itemNav = document.querySelectorAll(".lii")
//^^  fonction delete hover
const delet = () => {
    for (let index = 0; index < itemNav.length; index++) {
        let it = itemNav[index];
        it.firstElementChild.classList.remove("select");
    }
}
window.onscroll = () => {

    let ids = scrollY
    // console.log(ids);
    if (ids >= 0 && ids < 480) {
        delet()
        itemNav[0].firstElementChild.classList.add("select"); // home
    } else if (ids >= 480 && ids < 1940) {
        delet()
        itemNav[1].firstElementChild.classList.add("select"); //about
    } else if (ids >= 1940 && ids < 3211) {
        delet()
        itemNav[2].firstElementChild.classList.add("select"); //menu
    } else if (ids >= 3211 && ids < 3988) {
        delet()
        itemNav[3].firstElementChild.classList.add("select"); //events
    } else if (ids >= 3988 && ids < 4500) {
        delet()
        itemNav[4].firstElementChild.classList.add("select"); //chefs
    } else
        if (ids >= 5449 && ids < 5915) {
            delet()
            itemNav[5].firstElementChild.classList.add("select");
        } else if (ids >= 5915) {
            delet()
            itemNav[7].firstElementChild.classList.add("select");
        }
        else {
            delet()
        }
}

// ********** menu
let textTab = document.querySelectorAll(".texttabs");
let menuHiddin = document.querySelectorAll(".menuHiddin");
const menu = (num) => {
    for (let index = 0; index < menuHiddin.length; index++) {
        let element = menuHiddin[index];
        element.classList.add("d-none")
    }
    menuHiddin[num].classList.remove("d-none")
}
const menuHover = (element) => {
    for (let index = 0; index < textTab.length; index++) {
        let item = textTab[index];
        item.classList.remove("menuSelect")
    }
    element.classList.add("menuSelect")
}
for (let index = 0; index < textTab.length; index++) {
    let element = textTab[index];
    element.addEventListener("click", () => {
        console.log(element);
        switch (element.firstElementChild.textContent) {
            case "Starters":
                menuHover(element)
                menu(0);
                break;
            case "Breakfast":
                menuHover(element)
                menu(1);
                break;
            case "Lunch":
                menuHover(element)
                menu(2);
                break;
            case "Dinner":
                menuHover(element)
                menu(3);
                break;
        }
    })

}


// *** video
let watch = document.querySelector(".watch");
let btnPlay = document.querySelector(".video");
let bodu = document.querySelector(".body")
let xmark = document.querySelector(".xmark");
let link_youtube = watch.querySelectorAll("iframe");
let video_play2 = document.querySelector(".vdp");
const play = () => {
    bodu.classList.add("overflow");
    watch.classList.remove("d-none");
}
btnPlay.addEventListener("click", play);
video_play2.addEventListener("click", play);


// ^close btn
xmark.addEventListener("click", () => {
    bodu.classList.remove("overflow");
    watch.classList.add("d-none")
})
// ^^arrows
let left = document.querySelector(".fa-chevron-left");
let right = document.querySelector(".fa-chevron-right");

const nextt = () => {



    for (let index = 0; index < link_youtube.length; index++) {
        let element = link_youtube[index];
        if (!element.classList.contains("d-none")) {
            let next_eleme = element.nextElementSibling
            next_eleme.classList.remove("d-none")
            element.classList.add("d-none");
            break;
        }
        if (!link_youtube[link_youtube.length - 1].classList.contains("d-none")) {
            let next_eleme = link_youtube[0]
            next_eleme.classList.remove("d-none")
            link_youtube[link_youtube.length - 1].classList.add("d-none");
            break;

        }
    }
}
const previous = () => {


    for (let index = 0; index < link_youtube.length; index++) {
        let element = link_youtube[index];
        if (!link_youtube[0].classList.contains("d-none")) {
            let prev_elem = link_youtube[link_youtube.length - 1]
            prev_elem.classList.remove("d-none")
            link_youtube[0].classList.add("d-none");
            break;

        }
        if (!element.classList.contains("d-none")) {
            let prev_elem = element.previousElementSibling
            prev_elem.classList.remove("d-none")
            element.classList.add("d-none");
            break;
        }
    }
}

left.addEventListener("click", previous)
right.addEventListener("click", nextt)



// ** carroussel event 
let points = document.querySelectorAll(".point");
let carr = document.querySelector(".event_images");

const drags = (num) => {
    carr.scrollLeft = num
}

const redc = () => {
    for (let i = 0; i < points.length; i++) {
        let element = points[i];
        element.classList.remove("redp")
    }
}

for (let i = 0; i < points.length; i++) {
    let element = points[i];
    element.addEventListener("click", () => {
        redc()
        element.classList.add("redp");
    })
}

points[0].addEventListener("click", drags.bind(null, 0))
points[1].addEventListener("click", drags.bind(null, 450))
points[2].addEventListener("click", drags.bind(null, 900))


// points[0].addEventListener("click",()=>{
//     order(2,3)
//     order(0,-1)
// })

// document.getElementById("myRedDIV").style.order = "4";
// document.getElementById("myBlueDIV").style.order = "3";
// document.getElementById("myGreenDIV").style.order = "1";
// document.getElementById("myPinkDIV").style.order = "2";


