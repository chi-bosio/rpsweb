let imgArray = [
  "static/img/hand_rock.png",
  "static/img/hand_paper.png",
  "static/img/hand_scissors.png",
];

let playerScore = 0;
let computerScore = 0;

function choose(x) {
  fetch("/play?c=" + x)
    .then((response) => response.json())
    .then((data) => {
      if (x == 0) {
        document.getElementById("player_choice").innerHTML =
          "El jugador eligió PIEDRA";
      } else if (x == 1) {
        document.getElementById("player_choice").innerHTML =
          "El jugador eligió PAPEL";
      } else {
        document.getElementById("player_choice").innerHTML =
          "El jugador eligió TIJERA";
      }

      document.getElementById("player_score").innerHTML = data.player_score;
      document.getElementById("computer_score").innerHTML = data.computer_score;

      document.getElementById("computer_choice").innerHTML =
        data.computer_choice;
      document.getElementById("round_result").innerHTML = data.round_result;
      document.getElementById("round_message").innerHTML = data.message;

      var imgElement = document.getElementById("img_computer");
      imgElement.src = imgArray[data.computer_choice_int];

      playerScore = parseInt(data.player_score);
      computerScore = parseInt(data.computer_score);

      console.log(
        "Player score:",
        playerScore,
        "Computer score:",
        computerScore
      );

      if (playerScore >= 10 || computerScore >= 10) {
        console.log("Triggering Swal");
        let winnerMessage =
          playerScore >= 10
            ? "¡Felicidades! Has ganado el juego. ¿Quieres jugar de nuevo?"
            : "¡Lástima! La computadora ha ganado. ¿Quieres jugar de nuevo?";

        Swal.fire({
          title: "Juego terminado",
          text: winnerMessage,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("Reiniciando juego");
            playerScore = 0;
            computerScore = 0;
            location.reload();
          } else {
            console.log("Regresando al inicio");
            window.location.href = "/";
          }
        });
      }
    });
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
