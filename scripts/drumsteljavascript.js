/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Bronnen die ik heb gebruikt: */
/* https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit/sounds */
/* https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript */
/* https://medium.com/@mike_ekkel/javascript-30-day-1-drum-kit-cb3d6e5780ce */
/* https://www.zedge.net/ringtone/8328f389-e82c-3eb8-9eae-5eebbc225f5f */
/* https://www.w3schools.com/jsref/met_element_queryselectorall.asp */
/* https://www.w3schools.com/jsref/prop_html_classname.asp */
/* https://www.youtube.com/watch?v=VuN8qwZoego&t=313s */
/* https://www.w3schools.com/tags/av_event_ended.asp */
/* https://audio.online-convert.com/convert-to-wav */
/* https://freewavesamples.com */



/* Hier heb ik een event listener aangemaakt die checkt of er een toetsenbord-knop wordt ingedrukt en er wordt een function met parameter event meegegeven. */
document.addEventListener('keydown', function (Event) {

    /* Hier Hier heb ik alle divjes in de html, in een variable gestopt zodat het een array wordt die later voor de for loop wordt gebruikt. */
    var geluidjes = document.querySelectorAll("div");

    /* Hier gaat de for loop door alle geluidjes in de array heen. */
    for (var i = 0; i < geluidjes.length; i++) {

        /* Hier haal ik de classname van de divjes op en stop ik die in de variabele: 'naamvandeklasse'. */
        var naamvandeklasse = geluidjes[i].className;

        /* Hier haal ik met behulp van de class: 'naamvandeklasse' de waarde van de data-key op, dus welk nummer bij welke toets hoort. En deze stop ik in variabele getkey. */
        var getkey = document.getElementsByClassName(naamvandeklasse)[0].getAttribute("data-key");

        /* Hier check ik of keycode overeenkomt met de opgehaalde data-key van hierboven, en als dat zo is dan volgen de regels daaronder. */
        if (Event.keyCode == getkey) {

            /* En als dit klopt krijgt het divje die aangeeft welke knop het is een css-class mee die de knop groter maakt en een ander kleurtje krijgt. */
            document.getElementsByClassName(naamvandeklasse)[0].classList.add('drummen');

            /* Hier wordt het geluidje afgespeelt. */
            document.getElementById(getkey).play();
        }
    }
});


/* Hier heb ik een event listener aangemaakt die checkt of de toetsenbord-knop is losgelaten. De zelfde regels aan code worden afgespeelt met als verandering dat de css-class wordt verwijderd. */
document.addEventListener('keyup', function (Event) {

    var geluidjes = document.querySelectorAll("div");

    for (var i = 0; i < geluidjes.length; i++) {

        var naamvandeklasse = geluidjes[i].className;

        var getkey = document.getElementsByClassName(naamvandeklasse)[0].getAttribute("data-key");

        if (Event.keyCode == getkey) {

            /* En hier wordt de css-class verwijderd als de waarde true is. */
            document.getElementsByClassName(naamvandeklasse)[0].classList.remove('drummen');
        }
    }
});


/* Hier heb ik een eventlistener met als parameter click aangemaakt inclusief een functie. */
document.addEventListener('click', function () {

    /* Hier sla ik het click-event op in de variabele: 'knopjeaangeklikt'. */
    var knopjeaangeklikt = event.target;

    /* Hier haal ik de class van het knopje op dat in de html-code staat en stop die in de variabele: 'naamvandeklasse'. */
    var naamvandeklasse = knopjeaangeklikt.className;

    /* Hier controleer ik of het gedeelte dat je wilt aanklikken in de index.html wel een class genaamd: 'naamvandeklass' heeft, zo ja dan haalt hij in de volgende twee regels de getkey op en speelt hij een geluidje af. */
    if (document.getElementsByClassName(naamvandeklasse) !== 0) {

        /* Hier haal ik met behulp van de class: 'naamvandeklasse' de waarde van de data-key op, dus welk nummer bij welke toets hoort. En deze stop ik in variabele getkey. */
        var getkey = document.getElementsByClassName(naamvandeklasse)[0].getAttribute("data-key");

        /* Hier wordt het geluidje afgespeelt. */
        document.getElementById(getkey).play();
    }
});
