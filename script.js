document.addEventListener("DOMContentLoaded", function() {
    // Set the passphrase here (change this to your desired passphrase)
    const correctPassphrase = "a winding willow";
    
    // Prompt the user for the passphrase
    const userInput = prompt("Enter the passphrase to access the blog:");
  
    // Check if the passphrase is correct
    if (userInput === correctPassphrase) {
      // If correct, show the protected content
      document.getElementById("protectedContent").style.display = "block";
    } else {
      // If incorrect, alert the user and block access
      alert("Incorrect passphrase. Access denied.");
      // Optionally, clear the page content or redirect to another page
      document.body.innerHTML = "<h2>Access Denied</h2>";
    }
  });
  