<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="inscription.php" method="post">
        <div class="table">
            <div class="label">
                <label for="id_pokemon">ID : </label>
                <input type="text" name="id_pokemon" id="id_pokemon" placeholder="ID">
            </div>
            <div class="label">
                <label for="name">Nom : </label>
                <input type="text" name="name" id="name" placeholder="Nom">
            </div>
            <div class="label">
                <label for="type">Type : </label>
                <select  name="type" id="type" placeholder="Types">
                    <option value="grass">Grass</option>
                    <option value="Poison">Poison</option>
                    <option value="fire">Fire</option>
                    <option value="flying">Flying</option>
                    <option value="water">Water</option>
                    <option value="bug">Bug</option>
                    <option value="normal">Normal</option>
                    <option value="electric">Electric</option>
                    <option value="ground">Ground</option>
                    <option value="fairy">Fairy</option>
                    <option value="fighting">Fighting</option>
                    <option value="psychic">Psychic</option>
                    <option value="rock">Rock</option>
                    <option value="steel">Steel</option>
                    <option value="ice">Ice</option>
                    <option value="ghost">Ghost</option>
                    <option value="dragon">Dragon</option>
            </div>
            <div class="valider">
                <input type="button" name="form_tri" value="Filtrer">
            </div>
        </div>
    </form>
</body>

</html>