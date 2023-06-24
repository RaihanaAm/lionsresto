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
    if (ids >= 0 && ids < 500) {
        delet()
        itemNav[0].firstElementChild.classList.add("select");
    } else if (ids >= 505 && ids < 1909) {
        delet()
        itemNav[1].firstElementChild.classList.add("select");
    } else if (ids >= 1909 && ids < 3211) {
        delet()
        itemNav[2].firstElementChild.classList.add("select");
    } else if (ids >= 3211 && ids < 4705) {
        delet()
        itemNav[4].firstElementChild.classList.add("select");
    } else if (ids >= 4705) {
        delet()
        itemNav[7].firstElementChild.classList.add("select");
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
let link_youtube =watch.querySelectorAll("iframe");
btnPlay.addEventListener("click", () => {
    bodu.classList.add("overflow");
    watch.classList.remove("d-none")
})
    // ^close btn
xmark.addEventListener("click", () => {
    bodu.classList.remove("overflow");
    watch.classList.add("d-none")
})
// ^^arrows
let left =document.querySelector(".fa-chevron-left");
let right =document.querySelector(".fa-chevron-right");




const nextt=()=>{
    for (let index = 0; index < link_youtube.length; index++) {
        let element = link_youtube[index];
        if (!element.classList.contains("d-none")) {
            let next_eleme = element.nextElementSibling
            next_eleme.classList.remove("d-none")
            element.classList.add("d-none");
            break;
        }
        if (!link_youtube[link_youtube.length-1].classList.contains("d-none")) {
            let next_eleme = link_youtube[0]
            next_eleme.classList.remove("d-none")
            link_youtube[link_youtube.length-1].classList.add("d-none");
            break;
            
        }
    }
}


const previous=()=>{
    for (let index = 0; index < link_youtube.length; index++) {
        let element = link_youtube[index];
        if (!link_youtube[0].classList.contains("d-none")) {
            let prev_elem = link_youtube[link_youtube.length-1]
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

left.addEventListener("click",previous)
right.addEventListener("click",nextt)
console.log(document.documentElement.scrollHeight);



