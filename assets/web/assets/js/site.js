
var circleCategories = [
    "Une ferme bio",
    "Agrotourisme",
    "Centre équestre",
    "Expérimentation hydrogene",
    "Accueil des associations"
];

var cicleParagraph = [
    { color: "#70a835", text: "Production maraichère<br/>Production de plantes médicinales<br/>Transformation et vente<br/>Apiculture<br/>Alimentation du restaurant" },
    { color: "#78a1c9", text: "Hébergements des stagiaires<br/>Restauration<br/>Sentiers pédestres<br/>Promenades  équestre<br/>Promenades vélo Hydrogène<br/>Activités sportives<br/>Découverte de la  Guadeloupe" },
    { color: "#324056", text: "Poney club<br/>Pension<br/>Ferme d'élevage de shetland<br/>Activités équestres" },
    { color: "#f54a1e", text: "Projet PITHA<br/>Production PV & Eolien  Stockage batteries<br/>Electrolyse H2<br/>Stockage H2<br/>Distribution  H2<br/>R&D (CEA/UA/EMN)" },
    { color: "#aeabf5", text: "Jardins populaires<br/>AJAD<br/>APIGUA<br/>ARMETIS<br/>Association locales lois 1901" },
]

var images = [
    "assets/web/assets/images/village-1.jpg",
    "assets/web/assets/images/village-2.jpg",
    "assets/web/assets/images/village-3.jpg",
    "assets/web/assets/images/village-4.jpg",
    "assets/web/assets/images/village-5.jpg"            
]

var defaultText = { color: "#ffffff", text: "Autoconsommation alimentaire<br/>Autoconsommation énergétique<br/>Récupération d’eau<br/>Efficacité énergétique<br/>Gestion et recyclage des déchets<br/>Mobilité verte<br/>Pédagogie Formation<br/>Communication" };



function initBubble() {
    $('.selector ul li').each((i, li) => {
        const label = $(li).children('label');
        label.css("background", cicleParagraph[i].color);
        label.mouseover(() => {

            /*
            $("#jarallax-container-2").children().css("transition","background 0.3s linear")
            $("#jarallax-container-2").children().css("background-image","url(" + images[i] + ")")
            */

            $("#main-circle").fadeIn("slow", () => {
                $("#main-circle").html(cicleParagraph[i].text);
                $("#main-circle").css("background", cicleParagraph[i].color);
            });

        });

        $("#main-circle").html(defaultText.text);
    });



}



var bI = 0;

var angleStart = -360;

function rotate(li, d) {
    $({ d: angleStart }).animate({ d: d }, {
        step: function (now) {
            $(li)
                .css({ transform: 'rotate(' + now + 'deg)' })
                .find('label')
                .css({ transform: 'rotate(' + (-now) + 'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
    for (var i = 0; i < li.length; i++) {
        var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
    }
}

$('.selector button').click(function (e) {
    toggleOptions($(this).parent());
});


$(document).ready(function () {

    $('#navbarSupportedContent > ul > li').on('click', function(e) {
        $('.active').removeClass('active')
        $(e.currentTarget).children().addClass('active')
    })


    $('.selector ul li').each((i, li) => {

        const label = $(li).children('label');
        const span = $(li).find('span');
        const checkbox = $(li).children('input');

        span.text(circleCategories[i]);
    });
    initBubble();
    toggleOptions('.selector');    
});