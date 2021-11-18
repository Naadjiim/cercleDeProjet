function getText(){
        var str = document.getElementById('text').value;
        var string_norm = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if(string_norm.includes( "demi pension"))
                document.getElementById('modal').style.display = "block";
        else if(string_norm.includes('petit dejeuner'))
                document.getElementById('modal').style.display = "block";
        else if(string_norm.includes('hebergements'))
                document.getElementById('modal').style.display = "block";
        else if(string_norm.includes('inclus'))
                document.getElementById('modal').style.display = "block";
        else if(string_norm.includes('martinique'))
                document.getElementById('modal').style.display = "block";
        else if(string_norm.includes('marseille'))
                document.getElementById('modal').style.display = "block";
        else
                document.getElementById('modal').style.display = "none";
}