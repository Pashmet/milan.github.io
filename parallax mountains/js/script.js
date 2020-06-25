$(document).ready(function(){
$(window).scroll(function(event){
    let s = $(this).scrollTop();
    let w = $(this).outerWidth();
    let h = $(".content").outerHeight();
    let h_b = $(".parallax").outerHeight();
    let p = s/h*100;
    let p_b = s/h_b*100;
    let o = 1-1/100*p_b;
    
    
    let z_1 = 1+(w/10000*p_b);
    $(".parallax-fog").css("transform","scale("+z_1+")");
    $(".parallax-fog").css("opacity", o);

    let z_2 = 1+(w/5000000*p);
    $(".parallax-montain1").css("transform","scale("+z_2+")");

    let z_3 = 1+(w/0.000005*p*p_b);
    let hr = w/2000*p_b;
    $(".parallax-montain2").css("transform","translate3d("+hr+"px,0,0) scale("+z_3+")");


    let z_4 = 1+(w/0.00001*p*p_b);
    let hr_2 = w/1500*p_b;
    $(".parallax-montain3").css("transform","translate3d("+hr_2+"px,0,0) scale("+z_4+")");
})
})