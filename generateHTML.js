function generateHTML() {
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Get weather data from any city" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Team Roster</title>
</head>
<body>

  <nav class="navbar d-flex justify-content-center">
    <h1>My Team</h1>
  </nav>

<div class="container d-flex justify-content-around">
<div class="row">
    <!--Manager card-->
    <div class="card border-dark m-3" style="max-width: 18rem;">
        <div class="card-header"><h2>${data.manager-name}</h2></div>
        <div class="card-body text-dark">
          <h5 class="card-title">Manager</h5>

          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager-id}</li>
              <li class="list-group-item">${manager-email}</li>
              <li class="list-group-item">${office-number}</li>
            </ul>
          </div>
        </div>
      </div>

    <!--Engineer card-->
    <div class="card border-dark m-3" style="max-width: 18rem;">
        <div class="card-header"><h2>${data.engineer-name}</h2></div>
        <div class="card-body text-dark">
          <h5 class="card-title">Engineer</h5>

          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{data.engineer-id}</li>
              <li class="list-group-item">{data.engineer-email}</li>
              <li class="list-group-item">{data.github}</li>
            </ul>
          </div>
        </div>
      </div>

    <!--Intern card-->
    <div class="card border-dark m-3" style="max-width: 18rem;">
        <div class="card-header"><h2>${data.intern-name}</h2></div>
        <div class="card-body text-dark">
            <h5 class="card-title">Intern</h5>

            <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${data.intern-id}</li>
                <li class="list-group-item">${data.intern-email}</li>
                <li class="list-group-item">${data.school}</li>
            </ul>
            </div>
        </div>
        </div>
</div>
</div>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
<script src="./script.js"></script>

</html> b`
};

module.exports = generateHTML;