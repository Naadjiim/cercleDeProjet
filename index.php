<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Cercle de projet</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css">
    <link rel = "stylesheet" type="text/css" href = "stylesheet.css">
</head>

<body id="page-top">
    <div id="wrapper">
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <img class="rounded-circle img-profile" alt="logo" src="assets/img/avatars/810px-Raspberry_Pi_logo.svg.png" style="width: 43px;height: 47px;padding: -4px;margin: auto; text-align: center;">
                </nav>

                <div class="container">
                    <div class="row">
                        <div class="mb-4 mt-4">
                            <div class="col-md-12">
                                <h2 class="text-dark mb-4 text-center titre">Reconnaissance vocale</h2>
                            </div>
                            <div class="col-md-12">
                                <input type="text" id="text" class="form-control text-center" readonly>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">

                    <div class="mb-4 mt-4">
                        <h2 class="text-dark text-center">Données du Raspberry</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-start-primary py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col me-2">
                                            <div class="text-uppercase text-primary fw-bold text-xs mb-1"><span><strong>Température&nbsp;</strong><br></span></div>
                                            <div class="text-dark fw-bold h5 mb-0"><span id="temp">0</span></div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-temperature-high fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-start-success py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col me-2">
                                            <div class="text-uppercase text-success fw-bold text-xs mb-1"><span><strong>CPU</strong><br></span></div>
                                            <div class="text-dark fw-bold h5 mb-0"><span id="cpu">0</span></div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-microchip fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-start-info py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col me-2">
                                            <div class="text-uppercase text-info fw-bold text-xs mb-1"><span><strong>RAM</strong><br></span></div>
                                            <div class="row g-0 align-items-center">
                                                <div class="col-auto">
                                                    <div class="text-dark fw-bold h5 mb-0 me-3"><span id="ram">0</span></div>
                                                </div>
  
                                            </div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-start-warning py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col me-2">
                                            <div class="text-uppercase text-warning fw-bold text-xs mb-1"><span><strong>Date</strong><br></span></div>
                                            <div class="text-dark fw-bold h5 mb-0"><span id="date">0</span></div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-calendar-week fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="container">
                    <div class="mb-4 mt-4">
                        <h2 class="text-dark text-center">Statistiques d'utilisation</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex justify-content-between align-items-center">

                                    <h6 class="text-primary fw-bold m-0">Nombre de mots détectés</h6>

                                    <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
                                        <div class="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                                            <p class="text-center dropdown-header">dropdown header:</p><a class="dropdown-item" href="#">&nbsp;Action</a><a class="dropdown-item" href="#">&nbsp;Another action</a>
                                            <div class="dropdown-divider"></div><a class="dropdown-item" href="#">&nbsp;Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}}}"></canvas>
                                    </div>
                                    <div class="text-center small mt-4"><span class="me-2"><i class="fas fa-circle text-primary"></i>&nbsp;Direct</span><span class="me-2"><i class="fas fa-circle text-success"></i>&nbsp;Social</span><span class="me-2"><i class="fas fa-circle text-info"></i>&nbsp;Refferal</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <table class="table table-bordered" style="background-color: white">
                                <thead>
                                <tr class="text-center">
                                    <th scope="col"></th>
                                    <th scope="col">Demi pension</th>
                                    <th scope="col">Petit déjeuner</th>
                                    <th scope="col">Hébergement seul</th>
                                    <th scope="col">pension complete</th>
                                    <th scope="col">Tout inclus</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="text-center">
                                    <th scope="row">Compteur</th>
                                    <td id="demi pension"></td>
                                    <td id="petit dejeuner"></td>
                                    <td id="hebergement seul"></td>
                                    <td id="pension complete"></td>
                                    <td id="tout inclus"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="bg-white sticky-footer">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright"><span>Copyright © Exostismes 2021</span></div>
                </div>
            </footer>
        </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title black">Mot clé détecté</h5>
              <button type="button" class="close" onclick="Close(document.getElementById('key').innerText);">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p id='key' class="black">Vous avez prononcé : </p>
            </div>
          </div>
        </div>
      </div>


    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/chart.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    <script src="assets/js/theme.js"></script>
    <script>
        const socket = new WebSocket("ws://192.168.3.209:5000");
    
        socket.addEventListener("open", function (event){
            console.log("Connecté WS serveur")
        });
    
        socket.addEventListener("close", function (event){
            console.log("Déconnecté WS serveur")
        });
    
        socket.addEventListener("message", function (event){
           // console.log("Serveur : Data receive")
            UpdateData(JSON.parse(event.data))
        });
    
        function UpdateData(CpuJson){
            console.log(CpuJson);
            document.getElementById("date").innerText = CpuJson['CPUdata']['Date'];
            document.getElementById("temp").innerText = CpuJson['CPUdata']['Temperature'] + "°C";
            document.getElementById("cpu").innerText = CpuJson['CPUdata']['CpuUsage'].toFixed(2) + "%";
            document.getElementById("ram").innerText = CpuJson['CPUdata']['RAMUsage'] + "/3.7Go";

            if(document.getElementById('modal').style.display != "block") {
                let text = CpuJson['CPUdata']['Text'];
                if (text != "" && text != document.getElementById("text").innerText) {
                    document.getElementById("text").value = text;
                    this.getText(text);
                }
            }
        }
    
        const sendMsg = () =>{
            console.log("Client : Ping")
            socket.send("Ping")
        }

        if (typeof localStorage["demi pension"] == 'undefined' || localStorage["demi pension"] == 0) {
          localStorage["demi pension"] = 0;
          document.getElementById("demi-pension").innerText = localStorage["demi-pension"];
        }
        if (typeof localStorage["petit dejeuner"] == 'undefined' || localStorage["demi pension"] == 0) {
            localStorage["petit dejeuner"] = 0;
          document.getElementById("petit dejeuner").innerText = localStorage["petit dejeuner"];
        }
        if (typeof localStorage["hebergement seul"] == 'undefined' || localStorage["demi pension"] == 0) {
          localStorage["hebergement seul"] = 0;
          document.getElementById("hebergement seul").innerText = localStorage["hebergement seul"];
        }
        if (typeof localStorage["pension complete"] == 'undefined' || localStorage["demi pension"] == 0) {
          localStorage["pension complete"] = 0;
          document.getElementById("pension complete").innerText = localStorage["pension complete"];
        }
        if (typeof localStorage["tout inclus"] == 'undefined' || localStorage["demi pension"] == 0) {
          localStorage["tout inclus"] = 0;
          document.getElementById("tout inclus").innerText = localStorage["tout inclus"];
        }

     </script>
    
     <script src="script.js"></script>
</body>

</html>