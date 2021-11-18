var tab = ["petit dejeune",
    "demi pension",
    "marseille",
    "pension complète",
    "all inclusive",
    "tous inclut",
    "martinique",
    "hébergements seuls",
    "contre proposition",
    "cinque nuits",
    "douze juillet deux mille vingt deux",
    "deux adultes deux enfants un bb"
]

function getText() {
    var text = document.getElementById('test').value.toLowerCase();

    for (var i = 0; i-1 <= tab.length; i++) {
        var output = text.match(tab[i])
        if ( output == tab[i] ) {
            var test = text.match(tab[i])
            console.log(test[0])
        }
    }
    return test[0]
}
