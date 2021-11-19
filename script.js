var tab = ["petit dejeune",
        "petit déjeuner",
        "demi pension",
        "marseille",
        "pension complète",
        "all inclusive",
        "tous inclut",
        "martinique",
        "hébergement seul",
        "contre proposition",
        "nuit",
        "nuits",
        "douze juillet deux mille vingt deux",
        "deux adultes deux enfants un bb",
        "bonjour",
        'demi-pension',
        'Marseille',
        'conditions d’annulation',
        'condition annulation',
        'contre-proposition',
        'contre proposition',
]

function getText() {
        var text = document.getElementById('text').value.toLowerCase();
        //var text = textt.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        for (var i = 0; i-1 <= tab.length; i++) {
                var output = text.match(tab[i])
                console.log(output);
                if ( output == tab[i] ) {
                        var test = text.match(tab[i])
                        document.getElementById('modal').style.display = "block";
                        document.getElementById('key').innerText = tab[i];
                        console.log(test[0])
                        this.Close(a)
                }
        }
        return test[0]
}

function Close(str){
        var text = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        document.getElementById('modal').style.display = "none";
        var new_value = parseInt(localStorage.getItem(text)) + 1
        localStorage[text] = new_value;
        document.getElementById(text).innerText = localStorage[text];
}

