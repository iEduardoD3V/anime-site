class MobileNavBar{
    constructor(mobileMenu){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector (navList)
        this.navLinks = document.querySelectorAll (navLinks)
        this.activeClass = "active"
    }
    addClickEvent() {
    this.mobileMenu.addClickEventListener("click"), () => console.log
    ("hey👱🏾‍♀️");
}
init(){
    if(this.mobileMenu){
        this.addClickEvent();
    }
    return this;
}
}

const mobileNavbar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();

