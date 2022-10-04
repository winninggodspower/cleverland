
//setting the hover effect of the teacher carousel
$(".teacher-container").hover(
    (e) => { //hover
        let container = $(e.currentTarget);
        container.find("p").removeClass("d-none")
        container.find("p").fadeIn()
        container.addClass("shadow");
        console.log();
    },
    (e) => { //out
        let container = $(e.currentTarget);
        container.find("p").fadeOut()
        container.removeClass("shadow");
    }
);