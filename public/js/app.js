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
        if (ids >=0 && ids<500 ) {
            delet()
            itemNav[0].firstElementChild.classList.add("select");
        } else if (ids >=505 && ids<1909) {
            delet()
            itemNav[1].firstElementChild.classList.add("select");
        } else if (ids >=1909 && ids<3211) {
            delet()
            itemNav[2].firstElementChild.classList.add("select");
        } else if (ids >=3211 && ids<4705) {
            delet()
            itemNav[4].firstElementChild.classList.add("select");
        } else if (ids >=4705) {
            delet()
            itemNav[7].firstElementChild.classList.add("select");
        } 
    }






