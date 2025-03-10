document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll("header, footer");
  const idleTime = 4000; // Time (in ms) before fade out (e.g., 5 seconds)
  const fadeSection = document.querySelectorAll('.fade-in-section');
  // Options for the observer (here, 10% of the element is visible)
  const observerOptions = {
    threshold: 0.1
  };
  let timeout;


  // Set the passphrase here (change this to your desired passphrase)
  const correctPassphrase = "ultraviolet";
  
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

  // Function to hide both elements by adding the 'hidden' class
  function hideElements() {
    fadeElements.forEach(el => el.classList.add("hidden"));
  }


  // Function to show both elements and reset the timer
  function showElements() {
    fadeElements.forEach(el => el.classList.remove("hidden"));
    clearTimeout(timeout);
    timeout = setTimeout(hideElements, idleTime);
  }

  // Set initial timer to fade out elements after idleTime
  timeout = setTimeout(hideElements, idleTime);

  // Listen for user interactions: mouse movement, key press, or touch events
  document.addEventListener("mousemove", showElements);
  document.addEventListener("keydown", showElements);
  document.addEventListener("touchstart", showElements);




  // Fade-On-Scroll Functionality

  // Callback function executed when an observed element enters/exits the viewport
  const observerCallback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the is-visible class to trigger the CSS transition
        entry.target.classList.add('is-visible');
        // Optionally, stop observing the element after it has become visible
        observer.unobserve(entry.target);
      }
    });
  };

  // Create the IntersectionObserver instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each fade element
  fadeSection.forEach(el => {
    observer.observe(el);
  });




});

