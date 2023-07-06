<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <form action="inscription.php" method="post">
        <div class="table">
            <div class="label">
                <label for="id">ID : </label>
                <input type="text" name="id" id="id" placeholder="ID">
            </div>
            <div class="label">
                <label for="name">Nom : </label>
                <input type="text" name="name" id="name" placeholder="Nom">
            </div>
            <div class="label">
                <label for="type">Type : </label>
                <select  name="type" id="type" placeholder="Types">
                    <option value="">All</option>
                    <option value="Grass">Grass</option>
                    <option value="Poison">Poison</option>
                    <option value="Fire">Fire</option>
                    <option value="Flying">Flying</option>
                    <option value="Water">Water</option>
                    <option value="Bug">Bug</option>
                    <option value="Normal">Normal</option>
                    <option value="Electric">Electric</option>
                    <option value="Ground">Ground</option>
                    <option value="Fairy">Fairy</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Psychic">Psychic</option>
                    <option value="Rock">Rock</option>
                    <option value="Steel">Steel</option>
                    <option value="Ice">Ice</option>
                    <option value="Ghost">Ghost</option>
                    <option value="Dragon">Dragon</option>
            </div>
            <div class="valider">
                <input type="button" id ="filterBtn" name="form_tri" value="Filtrer">
            </div>
        </div>
    </form>
    <div id="results"></div>
    <script
        src="https://code.jquery.com/jquery-3.7.0.js"
        integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM="
        crossorigin="anonymous">
    </script>
    <script src="script.js"></script>
</body>

</html>