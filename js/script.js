'use strict'

$(function () {
    $('.preloader-wrapper').delay(1000).fadeOut('slow');
});


//===========================================================================================================
// delay(1000)
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

//=================================== header / footer ==========================================================

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
        <div class="container">

            <nav class="nav">
                <div class="logo-item">
                    <a href="index.html" class="logo"> Daphne </a>
                </div>

                <div class="openMenu"><i class="fa fa-bars"></i></div>
           
                <ul class="mainMenu">
                    <li class="header-list-item"> <a class="header-link" href="index.html"> Home </a></li>
                    <li class="header-list-item"> <a class="header-link" href="about-us.html"> About Us </a></li>
                    <li class="header-list-item"> <a class="header-link" href="services.html"> Services </a></li>
                    <li class="header-list-item"> <a class="header-link" href="gallery.html"> Gallery </a></li>
                    <li class="header-list-item"> <a class="header-link" href="blog.html"> Blog </a></li>
                    <li class="header-list-item"> <a class="header-link" href="contact.html"> Contact </a></li>
                   
                    <div class="closeMenu"><i class="fa fa-times"></i></div>
               </ul>

                <div class="nav-icons">
                    <a href="#"><i class="fas fa-search"></i> </a>
                </div>
              
               

        
            </nav>
        </div>

    </header>

        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer section-pad">
        <div class="background-footer">
            <div class="container-extra">
                <div class="footer-body">

                    <div class="footer-widget">

                        <div class="footer-logo-item">
                            <a href="index.html" class="footer-logo"> Daphne </a>
                        </div>
                        <p class="text-content-1">Welcome and open yourself to your truest love this year with
                            us! With the Release
                            Process</p>
                        <ul class="widget-sm-links">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>

                    </div>

                    <div class="footer-widget">
                        <h3 class="widget-title">Information</h3>
                        <ul class="widget-content-2">
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="gallery.html"> Gallery</a></li>
                            <li><a href="blog.html">Latest News</a></li>
                            <li><a href="services.html">Our Services</a></li>
                            <li><a href="contact.html"> Contact us</a></li>
                        </ul>

                    </div>


                    <div class="footer-widget">
                        <h3 class="widget-title">Contact</h3>
                        <p>Would you have any enquiries.Please feel free to contuct us</p>

                        <div class="widget-content-3">

                            <div class="widget-info-item">
                                <div><a class="widget-icons" href="#"><i class="fas fa-envelope"></i></a></div>
                                <p>daphneandco@gmail.com</p>
                            </div>
                            <div class="widget-info-item">
                                <div><a class="widget-icons" href="#"><i class="fas fa-phone"></i></a></div>
                                <p>+974 (635) 7356 4389</p>
                            </div>
                            <div class="widget-info-item">
                                <div><a class="widget-icons" href="#"><i class="fas fa-map-marker-alt"></i></a>
                                </div>
                                <p>139 Craigleith Rd, Edinburgh</p>
                            </div>

                        </div>
                    </div>

                    <div class="footer-widget">
                        <h3 class="widget-title">Instagram</h3>
                        <ul class="instagram-images-box">
                            <li><a href="#"><img src="images/footer/ft-img-1.jpg" alt=""></a></li>
                            <li><a href="#"><img src="images/footer/ft-img-2.jpg" alt=""></a></li>
                            <li><a href="#"><img src="images/footer/ft-img-3.jpg" alt=""></a></li>
                            <li><a href="#"><img src="images/footer/ft-img-4.jpg" alt=""></a></li>
                            <li><a href="#"><img src="images/footer/ft-img-5.jpg" alt=""></a></li>
                            <li><a href="#"><img src="images/footer/ft-img-6.jpg" alt=""></a></li>

                        </ul>

                    </div>



                </div>
            </div>
        </div>

        <div class="row-copyright">
        <div class="copyright">
          <p>  &copy; 2022 Daphne. Design By Aysha Gurbanova. All Right Reserved.</p>
        </div>
      </div>
    </footer>

    <button id="btn_scrool_top" class="my_btn_scrool_top"><i class="fas fa-arrow-up"></i></button>
   
        `
    }
}

customElements.define('my-footer', MyFooter)



// ========================= top scroll ==================================

document.getElementById("btn_scrool_top").onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};


window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        document.getElementById("btn_scrool_top").classList.add('active');
    } else {
        document.getElementById("btn_scrool_top").classList.remove('active');
    }
})


// =================================== burger-menu ===============================================================

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
   
}
function close() {
    mainMenu.style.top = '-100%';
}



