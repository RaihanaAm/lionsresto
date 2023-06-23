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




