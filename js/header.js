let burger_menu = () => {
    const menu = document.getElementById("burger_menu")
    if (menu.style.display == "flex") {
        menu.style.display = "none"
    }
    else {
        menu.style.display = "flex"
    }
}