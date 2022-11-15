function createGame(player1, hour, player2, p1, p2, group) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="${player1} flag" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="${player2} flag" />
    </li>

    <div class="countries">
      <h1>${p1}</h1>
      <h1> Group  ${group} </h1>
      <h1>${p2}</h1>
    </div>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay= delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "sunday",
    createGame("qatar", "08:00", "ecuador", "QAT", "ECU", "A")
  ) +
  createCard(
    "21/11",
    "monday",
    createGame("england", "05:00", "iran", "ENG", "IRN", "B") +
      createGame("senegal", "08:00", "netherlands", "SEN", "NLD", "A") +
      createGame("united-states", "11:00", "wales", "USA", "WLS", "B")
  ) +
  createCard(
    "22/11",
    "tuesday",
    createGame("argentina", "02:00", "saudi-arabia", "ARG", "SAU", "C") +
      createGame("denmark", "05:00", "tunisia", "DNK", "TUN", "D") +
      createGame("mexico", "08:00", "poland", "MEX", "POL", "C") +
      createGame("france", "11:00", "australia", "FRA", "AUS", "D")
  ) +
  createCard(
    "23/11",
    "wednesday",
    createGame("morroco", "02:00", "croatia", "MAR", "HRV", "F") +
      createGame("germany", "05:00", "japan", "DEU", "JPN", "E") +
      createGame("spain", "08:00", "costa-rica", "ESP", "CRI", "E") +
      createGame("belgium", "11:00", "canada", "BEL", "CAN", "F")
  ) +
  createCard(
    "24/11",
    "thursday",
    createGame("switzerland", "02:00", "cameroon", "CHE", "CMR", "G") +
      createGame("uruguay", "05:00", "south-korea", "URY", "KOR", "H") +
      createGame("portugal", "08:00", "ghana", "PRT", "GHA", "H") +
      createGame("brazil", "11:00", "serbia", "BRA", "SRB", "G")
  ) +
  createCard(
    "25/11",
    "friday",
    createGame("wales", "02:00", "iran", "WLS", "IRN", "B") +
      createGame("qatar", "05:00", "senegal", "QAT", "SEN", "A") +
      createGame("netherlands", "08:00", "ecuador", "NLD", "ECU", "A") +
      createGame("england", "11:00", "united-states", "ENG", "USA", "B")
  ) +
  createCard(
    "26/11",
    "saturday",
    createGame("tunisia", "02:00", "australia", "TUN", "AUS", "D") +
      createGame("poland", "05:00", "saudi-arabia", "POL", "SAU", "C") +
      createGame("france", "08:00", "denmark", "FRA", "DNK", "D") +
      createGame("argentina", "11:00", "mexico", "ARG", "MEX", "C")
  ) +
  createCard(
    "27/11",
    "sunday",
    createGame("japan", "02:00", "costa-rica", "JPN", "CRI", "E") +
      createGame("belgium", "05:00", "morroco", "BEL", "MAR", "F") +
      createGame("croatia", "08:00", "canada", "HRV", "CAN", "F") +
      createGame("spain", "11:00", "germany", "ESP", "DEU", "E")
  ) +
  createCard(
    "28/11",
    "monday",
    createGame("cameroon", "02:00", "serbia", "CMR", "SRB", "G") +
      createGame("south-korea", "05:00", "ghana", "KOR", "GHA", "H") +
      createGame("brazil", "08:00", "switzerland", "BRA", "CHE", "G") +
      createGame("portugal", "11:00", "uruguay", "PRT", "URY", "H")
  ) +
  createCard(
    "29/11",
    "tuesday",
    createGame("ecuador", "07:00", "senegal", "ECU", "SEN", "A") +
      createGame("netherlands", "07:00", "qatar", "NLD", "QAT", "A") +
      createGame("iran", "11:00", "united-states", "IRN", "USA", "B") +
      createGame("wales", "11:00", "england", "WLS", "ENG", "B")
  ) +
  createCard(
    "30/11",
    "wednesday",
    createGame("tunisia", "07:00", "france", "TUN", "FRA", "D") +
      createGame("australia", "07:00", "denmark", "AUS", "DNK", "D") +
      createGame("poland", "11:00", "argentina", "POL", "ARG", "C") +
      createGame("saudi-arabia", "11:00", "mexico", "SAU", "MEX", "C")
  ) +
  createCard(
    "01/12",
    "thursday",
    createGame("croatia", "07:00", "belgium", "HRV", "BEL", "F") +
      createGame("canada", "07:00", "morroco", "CAN", "MAR", "F") +
      createGame("japan", "11:00", "spain", "JPN", "ESP", "E") +
      createGame("costa-rica", "11:00", "germany", "CRI", "DEU", "E")
  ) +
  createCard(
    "02/12",
    "friday",
    createGame("south-korea", "07:00", "portugal", "KOR", "PRT", "H") +
      createGame("ghana", "07:00", "uruguay", "GHA", "URY", "H") +
      createGame("serbia", "11:00", "switzerland", "SRB", "CHE", "G") +
      createGame("cameroon", "11:00", "brazil", "CMR", "BRA", "G")
  )