
/* Jquery Main */

$( ".hover" ).click(
    function () {
        $( "#name" ).off('name-shown');
        $(loru).prop( "disabled", true );
        
    }
)
$( ".hover" ).hover(
    function(loru) {
        
    $( "#name" ).addClass('name-shown');
  }, function(loru) {
    $( "#name" ).removeClass('name-shown');
  }
);


$("nav").css("display", "none", "margin-left", "20%");
$("nav").fadeIn(2000, function () {
    $(this).css("display", "normal");
});

$("footer").css("display", "none", "margin-left", "20%");
$("footer").fadeIn(1500, function () {
    $(this).css("display", "normal");
});

/* Jquery Main */

/* Jquery Index */

$(".content41").css({ "position": "relative", "opacity": 0, "bottom": "+=100" });
$(".content41").animate({ bottom: 0, opacity: 1 }, 1500);

$("#ticker").css({ "position": "absolute", "opacity": 0, "left": "+=100" });
$("#ticker").animate({ left: 0, opacity: 1 }, 2000);

/* Jquery Index */

/* Jquery Home */


$("#cate").css({ "position": "relative", "opacity": 0, "bottom": "+=100" });
$("#cate").animate({ bottom: 0, opacity: 1 }, 1500);

$("#cate1").css({ "position": "relative", "opacity": 0, "bottom": "+=100" });
$("#cate1").animate({ bottom: 0, opacity: 1 }, 1500);

$("#cate2").css({ "position": "relative", "opacity": 0, "top": "+=100" });
$("#cate2").animate({ top: 0, opacity: 1 }, 1500);

$("#cate3").css({ "position": "relative", "opacity": 0, "top": "+=100" });
$("#cate3").animate({ top: 0, opacity: 1 }, 1500);

$("#left").css({ "position": "relative", "opacity": 0, "left": "+=100" });
$("#left").animate({ left: 0, opacity: 1 }, 1500);

$("#right").css({ "position": "relative", "opacity": 0, "right": "+=100" });
$("#right").animate({ right: 0, opacity: 1 }, 1500);

$(".ticker").css({ "position": "relative", "opacity": 0, "top": "+=100" });
$(".ticker").delay(700).animate({ top: 0, opacity: 1 }, 1500);


/* Jquery Home  */


/* Jquery Contact us  */

$("#contact").css({ "position": "relative", "opacity": 0, "top": "+=500" });
$("#contact").animate({ top: 0, opacity: 1 }, 1200);

$("#ch").css({ "position": "relative", "opacity": 0, "left": "+=300" });
$("#ch").delay(2000).animate({ left: 0, opacity: 1 }, 2000);

$("#cc").css({ "position": "relative", "opacity": 0, "right": "+=300" });
$("#cc").delay(2000).animate({ right: 0, opacity: 1 }, 2000);

$("#submit").css({ "position": "relative", "opacity": 0, "left": "+=200" });
$("#submit").delay(500).animate({ left: 0, opacity: 1 }, 1500);

$("#fotin").css({ "position": "relative", "opacity": 0, "left": "+=300" });
$("#fotin").delay(600).animate({ left: 0, opacity: 1 }, 1500);

$("#fotin1").css({ "position": "relative", "opacity": 0, "left": "+=300" });
$("#fotin1").delay(700).animate({ left: 0, opacity: 1 }, 1500);

$("#fotin2").css({ "position": "relative", "opacity": 0, "left": "+=300" });
$("#fotin2").delay(800).animate({ left: 0, opacity: 1 }, 1500);

$("#fotin3").css({ "position": "relative", "opacity": 0, "left": "+=300" });
$("#fotin3").delay(900).animate({ left: 0, opacity: 1 }, 1500);

$("#iframe").css({ "position": "relative", "opacity": 0, "top": "+=300" });
$("#iframe").delay(1000).animate({ top: 0, opacity: 1 }, 1500);


$("#cus-hr").css({ "position": "relative", "opacity": 0, "top": "+=500" });
$("#cus-hr").delay(2500).animate({ top: 0, opacity: 1 }, 2000);


let dropdown = localStorage.getItem("secret")
let mydd = document.getElementsByClassName("droppy")
if(dropdown=="code"){
    
    $(".my-container").removeClass("d-none");
    $('.loginbtn').addClass("d-none");
    $(".navul").css({ "position": "relative", "left": "+=245" });
    
}
else{
    
    $(".my-container").addClass("d-none");

}

/* Jquery Contact us  */


/* Jquery Info  */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeshow');
        }
        else {
            entry.target.classList.remove('fadeshow');
        }
    });
});


const hiddenElements = document.querySelectorAll('.fadehidden');
hiddenElements.forEach((el) => observer.observe(el));




$(".toc-sticky").css({ "position": "sticky", "opacity": 0, "left": "+=100" });
$(".toc-sticky").animate({ left: 0, opacity: 1 }, 2500);

$(".fadein").css({ "position": "relative", "opacity": 0, "right": "+=100" });
$(".fadein").animate({ right: 0, opacity: 1 }, 2000);

$('#crypto').click(function () {
    $('#m1').addClass("myactive");
    $('#m2').removeClass("myactive");
    $('#m3').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m8').removeClass("myactive");
});
$('#understanding').click(function () {
    $('#m2').addClass("myactive");
    $('#m1').removeClass("myactive");
    $('#m3').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m8').removeClass("myactive");
});

$('#types').click(function () {
    $('#m3').addClass("myactive");
    $('#m1').removeClass("myactive");
    $('#m2').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m8').removeClass("myactive");
});

$('#legality').click(function () {
    $('#m4').addClass("myactive");
    $('#m1').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m8').removeClass("myactive");
});
$('#safety').click(function () {
    $('#m5').addClass("myactive");
    $('#m1').removeClass("myactive");
    $('#m2').removeClass("myactive");
    $('#m3').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m8').removeClass("myactive");

});


$('#disadvantages').click(function () {
    $('#m6').addClass("myactive");
    $('#m2').removeClass("myactive");
    $('#m3').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m1').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m8').removeClass("myactive");

});


$('#faqs').click(function () {
    $('#m7').addClass("myactive");
    $('#m2').removeClass("myactive");
    $('#m3').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m1').removeClass("myactive");
    $('#m8').removeClass("myactive");

});


$('#bottom').click(function () {
    $('#m8').addClass("myactive");
    $('#m2').removeClass("myactive");
    $('#m3').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m1').removeClass("myactive");

});




/* 
$('#m1').addClass("myactive");
    $('#m2').removeClass("myactive");
    $('#m3').removeClass("myactive");
    $('#m4').removeClass("myactive");
    $('#m5').removeClass("myactive");
    $('#m6').removeClass("myactive");
    $('#m7').removeClass("myactive");
    $('#m8').removeClass("myactive"); */
    
    
    /* Jquery Info  */
    
    
    /* Login/SignUp */
    
    
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");
    y.style.left = "450px";
    function register3() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
        
    }
    function login3() {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
    }
    
    /* Validation */

    $("#register").submit(function(e) {
        e.preventDefault();
      });
    $("#login").submit(function(e) {
        e.preventDefault();
      });
    

function signup() {
    let a = document.getElementById('uname').value
    let b = document.getElementById('uemail').value
    let c = document.getElementById('upass').value

 

    /* $("#register").submit(function(e) {
        e.preventDefault();
    }); */

    
    localStorage.setItem("name",a)
    if (localStorage.credentials && JSON.parse(localStorage.credentials)[b]) {
        setTimeout(function () {
            Swal.fire(
                'Email already exist!',
                'Try something new',
                'warning'
                )
                
        }, 1000)
        return false
    }
    if (localStorage.getItem("credentials")) {
        creds = JSON.parse(localStorage.getItem("credentials"))
    }


    else {
        creds = {}
    }
    creds[b] = c
    localStorage.setItem("credentials", JSON.stringify(creds));
    localStorage.setItem("loggedIN",11);
        
            setTimeout(() => {
             
                Swal.fire(
                    'Rgistered Successfully!',
                    'Login to your account',
                    'success'
                    )
            },1000)
            
        }
      


function login() {
    // let a = document.getElementById('uname').value;
    let b = document.getElementById('Lemail').value;
    let c = document.getElementById('Lpass').value;

 

    if(!localStorage.credentials || !JSON.parse(localStorage.credentials)[b]){
        
        setTimeout(function () {
            Swal.fire({
                icon: 'error',
                title: 'User Not Found',
                text: 'Try again ',
                
              });
        
        }, 500)
        return false;
    };

    if(JSON.parse(localStorage.credentials)[b]!==c)
    {
        setTimeout(function () {
            Swal.fire({
                icon: 'warning',
                title: 'Password is incorrect!',
                text: 'Try again'
            
              });
                
        }, 1000)
        return false
        
    }
    localStorage.setItem("secret","code")
    setTimeout(() => {

        const Toast = Swal.mixin({
            toast: true,
            padding: '1rem',
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'

    });
},1000)
setTimeout(() => {
    
    window.location.href="../htmlpages/home.html"
}, 3500);
}




function logout(){
    setTimeout(()=>{
        localStorage.removeItem("secret");
        window.location.href="home.html"

    },1000)

}



/* Login/SignUp */

/* Nav responsive */






/* Nav responsive */