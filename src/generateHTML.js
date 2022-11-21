function generateHTML(roster) {
  function managerHTML(managers) {
    const HTML = [];
    managers.forEach(manager => {
      HTML.push(` <div class="card border-dark m-3" style="max-width: 18rem;">
      <div class="card-header"><h2>${manager.name}</h2></div>
      <div class="card-body text-dark">
        <h5 class="card-title">Manager</h5>

        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>ID: </b>${manager.id}</li>
            <li class="list-group-item"><b>Email: </b>${manager.email}</li>
            <li class="list-group-item"><b>Office number: </b>${manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>`)
    })
    return HTML.join('');
  }
  function engineerHTML(engineers) {
    const HTML =[];
    engineers.forEach(engineer => {
      HTML.push(`<div class="card border-dark m-3" style="max-width: 18rem;">
      <div class="card-header"><h2>${engineer.name}</h2></div>
      <div class="card-body text-dark">
        <h5 class="card-title">Engineer</h5>

        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>ID: </b>${engineer.id}</li>
            <li class="list-group-item"><b>Email: </b>${engineer.email}</li>
            <li class="list-group-item"><b>GitHub: </b>${engineer.github}</li>
          </ul>
        </div>
      </div>
    </div>`)
    })
    return HTML.join('')
  }

  function internHTML(interns) {
    const HTML =[];
    interns.forEach(intern => {
      HTML.push(`<div class="card border-dark m-3" style="max-width: 18rem;">
      <div class="card-header"><h2>${intern.name}</h2></div>
      <div class="card-body text-dark">
        <h5 class="card-title">Intern</h5>

        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>ID: </b>${intern.id}</li>
            <li class="list-group-item"><b>Email: </b>${intern.email}</li>
            <li class="list-group-item"><b>School: </b>${intern.school}</li>
          </ul>
        </div>
      </div>
    </div>`)
    })
    return HTML.join('')
  }
return `<!DOCTYPE html>
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
   ${managerHTML(roster.filter(employee => employee.getRole() === 'Manager'))}

    <!--Engineer card-->
   ${engineerHTML(roster.filter(employee => employee.getRole() === 'Engineer'))}

    <!--Intern card-->
    ${internHTML(roster.filter(employee => employee.getRole() === 'Intern'))}

</div>
</div>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
<script src="./script.js"></script>

</html>`
};

module.exports = generateHTML;