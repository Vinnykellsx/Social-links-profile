function updateUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  utcTimeElement.textContent = `${now.toUTCString()}`;
}

updateUTCTime();