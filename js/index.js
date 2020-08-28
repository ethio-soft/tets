

$(document).ready(function () {
var count = 0;
var counter = setInterval(function(){
if(count < 101){
$('.count').text(count + '%');
$('.loader_1').css('width' , count + '%');
count++
}
else{
clearInterval(counter)	
}
},40)

});

let t1 = gsap.timeline({ ease: Expo.easeInOut });
t1.set(".logo", {
opacity:0,
left:-50,
})
.to(".logo", {
opacity:1,
duration: 1,
left:0,
delay:5,
});
let t2 = gsap.timeline({ ease: Expo.easeInOut });
t2.set(".links", {
opacity:0,
right:100,
})
.to(".links", {
opacity:1,
duration: 1,
right:50,
delay:5,
});
let t3 = gsap.timeline({ ease: Expo.easeInOut });
t3.set(".text_1.one", {
opacity:0,
})
.to(".text_1.one", {
opacity:1,
duration: 1.5,
delay:6,
});
let t4 = gsap.timeline({ ease: Expo.easeInOut });
t4.set(".text_2.two", {
opacity:0,
})
.to(".text_2.two", {
opacity:1,
duration: 1.5,
delay:5.5,
});
let t5 = gsap.timeline({ ease: Expo.easeInOut });
t5.set(".text_3.three", {
opacity:0,
})
.to(".text_3.three", {
opacity:1,
duration: 1.5,
delay:6,
});
let t6 = gsap.timeline({ ease: Expo.easeInOut });
t6.set(".button_holder.one", {
opacity:0,
})
.to(".button_holder.one", {
opacity:1,
duration: 1.5,
delay:6.5,
});

var typed = new Typed(".typing",{
strings:[
'THE PERFECT PLACE WHERE YOU WANT TO BE',
'IT IS THE PLACE THAT MAKE YOU ESPECIAL',
'COME ON IT IS A PLACE WHERE YOU FELL IT'
],
typeSpeed:120,
backSpace:120,
loop:true,
showCursor:false,

});

new hoverEffect({
parent:document.querySelector(".room_img"),
intensity:0.2,
image1:"img/785412.jpg",
image2:"img/785412.jpg",
displacementImage:"img/strip.png"
});







