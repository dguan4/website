(function($) {
    $(function(){
        console.log("hello");

        $(".button-collapse").sideNav({
            menuWidth: 300,
            edge: "left",
            closeOnClick: true
        });
    });
});
