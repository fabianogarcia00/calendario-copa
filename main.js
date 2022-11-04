function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
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
    createCard("20/11", "domingo", createGame("qatar", "08:00", "ecuador")) +
    createCard(
      "21/11",
      "segunda",
      createGame("england", "05:00", "iran") +
        createGame("senegal", "08:00", "netherlands") +
        createGame("united-states", "11:00", "wales")
    ) +
    createCard(
      "22/11",
      "terca",
      createGame("argentina", "02:00", "saudi-arabia") +
        createGame("denmark", "05:00", "tunisia") +
        createGame("mexico", "08:00", "poland") +
        createGame("france", "11:00", "australia")
    ) +
    createCard(
      "23/11",
      "quarta",
      createGame("morroco", "02:00", "croatia") +
        createGame("germany", "05:00", "japan") +
        createGame("spain", "08:00", "costa-rica") +
        createGame("belgium", "11:00", "canada")
    ) +
    createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "02:00", "cameroon") +
        createGame("uruguay", "05:00", "south-korea") +
        createGame("portugal", "08:00", "ghana") +
        createGame("brazil", "11:00", "serbia")
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("wales", "02:00", "iran") +
        createGame("qatar", "05:00", "senegal") +
        createGame("netherlands", "08:00", "ecuador") +
        createGame("england", "11:00", "united-states")
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("tunisia", "02:00", "australia") +
        createGame("poland", "05:00", "saudi-arabia") +
        createGame("france", "08:00", "denmark") +
        createGame("argentina", "11:00", "mexico")
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("japan", "02:00", "costa-rica") +
        createGame("belgium", "05:00", "morroco") +
        createGame("croatia", "08:00", "canada") +
        createGame("spain", "11:00", "germany")
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("cameroon", "02:00", "serbia") +
        createGame("south-korea", "05:00", "ghana") +
        createGame("brazil", "08:00", "switzerland") +
        createGame("portugal", "11:00", "uruguay")
    ) +
    createCard(
      "29/11",
      "terca",
      createGame("ecuador", "07:00", "senegal") +
        createGame("netherlands", "07:00", "qatar") +
        createGame("iran", "11:00", "united-states") +
        createGame("wales", "11:00", "england")
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("tunisia", "07:00", "france") +
        createGame("australia", "07:00", "denmark") +
        createGame("poland", "11:00", "argentina") +
        createGame("saudi-arabia", "11:00", "mexico")
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("croatia", "07:00", "belgium") +
        createGame("canada", "07:00", "morroco") +
        createGame("japan", "11:00", "spain") +
        createGame("costa-rica", "11:00", "germany")
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("south-korea", "07:00", "portugal") +
        createGame("ghana", "07:00", "uruguay") +
        createGame("serbia", "11:00", "switzerland") +
        createGame("cameroon", "11:00", "brazil")
    )