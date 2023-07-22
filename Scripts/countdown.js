
    // Function to update the countdown
    function updateCountdown() {
      const currentTime = new Date();
      const startTime = new Date(currentTime);
      startTime.setHours(0, 0, 0, 0); // Set to the beginning of the day

      const endTime = new Date(startTime);
      endTime.setHours(startTime.getHours() + 20); // Add 12 hours to the start time

      const timeDifference = endTime - currentTime;
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Countdown is over!";
        return;
      }

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
    //   document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    document.getElementById('hrs').innerHTML = hours
    document.getElementById('mins').innerHTML = minutes
    document.getElementById('secs').innerHTML = seconds
}

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initialize the countdown
    updateCountdown();
