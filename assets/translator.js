const DEFAULT_LANG = 'en'

var translations = {
    "fr": {
        "title": "calculatrice pain au levain",
        "ingredients": "ingrédients",
        "bread": "pain",
        "flour": "farine",
        "water": "eau",
        "hydration": "hydratation souhaitée",
        "starter": "levain",
        "starter_weight": "poids",
        "starter_hydration": "hydratation du levain",
        "salt": "sel",
        "total_weight": "poids final du pain",
        "time": "temps",
        "cold": "frigo",
        "ambiant_temp": "temp. ambiante",
        "ready_at": "prêt à",
        "cooking_time": "temps de cuisson",
        "second_ferm": "2nde fermentat°",
        "first_ferm": "1re fermentat°",
        "starter_feed_time": "rafraîchi levain",
        "to_add" : "à ajouter",
        "etc" : "—",
    },
    "en": {
        "title": "sourdough calculator",
        "ingredients": "ingredients",
        "bread": "bread",
        "flour": "flour",
        "water": "water",
        "hydration": "desired hydration",
        "starter": "starter",
        "starter_weight": "weight",
        "starter_hydration": "starter hydration",
        "salt": "salt",
        "total_weight": "total weight",
        "time": "time",
        "cold": "cold",
        "ambiant_temp": "ambiant temperature",
        "ready_at": "ready at",
        "cooking_time": "cooking time",
        "second_ferm": "second fermt°",
        "first_ferm": "first fermt°",
        "starter_feed_time": "starter feed",
        "to_add" : "to add",
        "etc" : "—",
    }
};

/**
 * Replace words
 */
var langUrl = document.URL.match(/[&?]lang=([a-z]+)/);
var lang = langUrl ? langUrl[1] : DEFAULT_LANG;
var nodes = document.querySelectorAll('.translate');

for (var i = 0, n = nodes.length; i < n; i++) {
    translation = translations[lang][nodes[i].textContent.replace(/[{}]/g, '')];
    if (translation === undefined) {
        console.error('Missing translation for ' + nodes[i].textContent)
    } else {
        nodes[i].textContent = translation
    }
}
