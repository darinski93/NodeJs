module.exports = `


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../content/styles/site.css">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="">Home Page</a></li>
                <li><a href="">Add Breed</a></li>
                <li><a href="">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
    </header>
    <main>
        <form action="#" method="" class="cat-form" enctype="multipart/form-data">
            <h2>Edit Cat</h2>
            <label for="name">Name</label>
            <input type="text" id="name" value="Pretty Cat">
            <label for="description">Description</label>
            <textarea id="description">Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</textarea>
            <label for="image">Image</label>
            <input type="file" id="image">
            <label for="group">Breed</label>
            <select id="group">
                <option value="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button>Edit Cat</button>
        </form>
    </main>
</body>

</html>
`