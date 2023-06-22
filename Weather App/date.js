function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM";
    if (hours > 12) {
      hours -= 12;
      ampm = "pm";
    }
    let timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("time").innerHTML = timeString;
  }
  setInterval(currentTime, 1000);

// -------------Date--------------
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const dateEl = document.querySelector("#date");
  dateEl.innerHTML = `${day}-${month}-${year}`;
