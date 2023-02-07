
    // Naviagation bar

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
    
    const visibility = nav.getAttribute("data-visible")
    // if the nav is closed, open it
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        // if the nav is open, close it
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
  })




    //   Destination tabs

    const tabList = document.querySelector('[role="tablist"]');
    const tabs = tabList.querySelectorAll('[role="tab"]');

    tabList.addEventListener('keydown', changeTabFocus);


    tabs.forEach((tab) => {
        tab.addEventListener('click', changeTabPanel);
        });


    let tabFocus = 0;
    function changeTabFocus(e) {
        const keydownLeft = 37;
        const keydownRight = 39;

        // change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
                // if the right key is pushed, move to the next tab on the right
                if (e.keyCode === keydownRight) {
                    tabFocus++;
                    if (tabFocus >= tabs.length) {
                        tabFocus = 0;
                    }
                }
                
                // if the left key is pushed, move to the next tab on the left
                if (e.keyCode === keydownLeft) {
                    tabFocus--;
                    if (tabFocus < 0) {
                        tabFocus = tabs.length - 1;
                    }
                }

                tabs[tabFocus].setAttribute("tabindex", 0);
                tabs[tabFocus].focus();
                } 
    }


    function changeTabPanel(e) {
        const targetTab = e.target;
        const targetPanel = targetTab.getAttribute("aria-controls");
        const targetImage = targetTab.getAttribute("data-image");
        
        const tabContainer = targetTab.parentNode;
        const mainContainer = tabContainer.parentNode;

        tabContainer
            .querySelector('[aria-selected="true"]')
            .setAttribute("aria-selected", false);


        targetTab.setAttribute("aria-selected", true);

        hideContent(mainContainer, '[role="tabpanel"]');
        showContent(mainContainer, [`#${targetPanel}`]);
        
        hideContent(mainContainer, 'picture');
        showContent(mainContainer, [`#${targetImage}`]);
        
        hideImageTechnology1();
        hideImageTechnology2();
        hideImageTechnology3();
    }

    function hideContent (parent, content) {
        parent
            .querySelectorAll(content)
            .forEach((item) => item.classList.add("hidden"));
                       
    }

    

    function showContent (parent, content) {
        parent.querySelector(content).classList.remove("hidden");
        
    }






    // Technology tabs


    function hideImageTechnology1() {
        if (document.querySelector("#techTab").classList == "active" && document.querySelector("#vehic-image").classList == "hidden") {
            document.querySelector("#vehic-image").style.display = "none";
            } else {document.querySelector("#vehic-image").style.display = "block"}}

    function hideImageTechnology3() {
        if (document.querySelector("#techTab").classList == "active" && document.querySelector("#spacep-image").classList == "hidden") {
            document.querySelector("#spacep-image").style.display = "none";
            } else {document.querySelector("#spacep-image").style.display = "block"}}     

    function hideImageTechnology2() {
        if (document.querySelector("#techTab").classList == "active" && document.querySelector("#caps-image").classList == "hidden") {
            document.querySelector("#caps-image").style.display = "none";
            } else {document.querySelector("#caps-image").style.display = "block"}}     
            
    
    










   

    // function changeTabPanel(e) {
    //     const targetTab = e.target;
    //     const targetPanel = targetTab.getAttribute("aria-controls");
    //     const targetImage = targetTab.getAttribute("data-image");
        
    //     const tabContainer = targetTab.parentNode;
    //     const mainContainer = tabContainer.parentNode;

    //     tabContainer
    //         .querySelector('[aria-selected="true"]')
    //         .setAttribute("aria-selected", false);


    //     targetTab.setAttribute("aria-selected", true);

    //     mainContainer
    //         .querySelectorAll('[role="tabpanel"]')
    //         .forEach((panel) => panel.classList.add("hidden"));

    //     mainContainer.querySelector([`#${targetPanel}`]).classList.remove("hidden");

    //     mainContainer
    //     .querySelectorAll('picture')
    //     .forEach((picture) => picture.classList.add("hidden"));

    //     mainContainer.querySelector([`#${targetImage}`]).classList.remove("hidden");
        
              
    // }