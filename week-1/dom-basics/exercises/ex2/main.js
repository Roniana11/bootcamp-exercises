const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const nameInput = document.getElementById("name-input");
const checkButton = document.getElementById("check-btn");

const checkReservation = () => {
  const nameValue = nameInput.value;
  const reservation = reservations[nameValue];
  if (reservation) {
    if (reservation.claimed) {
      alert("The reservation was already claimed..");
    } else {
      alert("Welcome!");
    }
  } else {
    alert("Sorry, We couldn't find your reservation");
  }
};

checkButton.addEventListener("click", checkReservation);
