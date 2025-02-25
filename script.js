document.addEventListener("DOMContentLoaded", function() {

  const header = document.querySelector("header");
  const idleTime = 5000; // Time in milliseconds before header fades out (e.g., 5000ms = 5 seconds)
  let timeout;

  // Set the passphrase here (change this to your desired passphrase)
  const correctPassphrase = "a river runs";
  
  // Check if the correct passphrase is stored in local storage
  const storedPassphrase = localStorage.getItem("passphrase");

  if (storedPassphrase === correctPassphrase) {
    // If the correct passphrase is already stored, display the content
    document.getElementById("protectedContent").style.display = "block";
  } else {
    // Otherwise, prompt the user for the passphrase
    const userInput = prompt("Enter the passphrase to access the blog:");

    // Check if the passphrase is correct
    if (userInput === correctPassphrase) {
      // If correct, store the passphrase in local storage and show the content
      localStorage.setItem("passphrase", correctPassphrase);
      document.getElementById("protectedContent").style.display = "block";
    } else {
      // If incorrect, alert the user and block access
      alert("Incorrect passphrase. Access denied.");
      document.body.innerHTML = "<h2>Access Denied ;)</h2>";
    }
  }

   // Function to hide the header by adding the 'hidden' class
   function hideHeader() {
    header.classList.add("hidden");
  }

  // Function to show the header by removing the 'hidden' class and reset the timer
  function showHeader() {
    header.classList.remove("hidden");
    clearTimeout(timeout);
    timeout = setTimeout(hideHeader, idleTime);
  }

  // Set the initial timer to hide the header after idleTime
  timeout = setTimeout(hideHeader, idleTime);

  // Listen for user interactions: mouse movement, key press, or touch events
  document.addEventListener("mousemove", showHeader);
  document.addEventListener("keydown", showHeader);
  document.addEventListener("touchstart", showHeader);
});
