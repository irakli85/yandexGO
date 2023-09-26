function removeClassOnResize() {
    const element = document.getElementById("myElement");
    const desktopWidth = 1440; // Define your desired desktop width in pixels
  
    function checkWidth() {
      if (window.innerWidth >= desktopWidth) {
        element.classList.remove("swiper","mySwiper");
      } else {
        element.classList.add("swiper","mySwiper");
      }
    }
  
    // Initial check
    checkWidth();
  
    // Add an event listener to check whenever the window is resized
    window.addEventListener("resize", checkWidth);
  }
  
  // Call the function to start monitoring the window width
  removeClassOnResize();
  