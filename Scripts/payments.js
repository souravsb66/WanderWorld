$(document).ready(function(){
    //Menu Toggle Script
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // For highlighting activated tabs
    $("#tab1").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light"); 
        $("#tab1").addClass("text-primary");
        $("#tab1").removeClass("bg-light");
    });
    $("#tab2").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab2").addClass("text-primary");
        $("#tab2").removeClass("bg-light");
    });
    $("#tab3").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab3").addClass("text-primary");
        $("#tab3").removeClass("bg-light");
    });
    $("#tab4").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab4").addClass("text-primary");
        $("#tab4").removeClass("bg-light");
    });
    $("#tab5").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab5").addClass("text-primary");
        $("#tab5").removeClass("bg-light");
    });
    $("#tab6").click(function () {
        $(".tabs").removeClass("text-primary");
        $(".tabs").addClass("bg-light");
        $("#tab6").addClass("text-primary");
        $("#tab6").removeClass("bg-light");
    });

})