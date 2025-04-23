
document.addEventListener("DOMContentLoaded", () => {
  const refreshButton = document.querySelector(".controls button:nth-child(1)");
  const flagButton = document.querySelector(".controls button:nth-child(3)");
  const disableButton = document.querySelector(".controls button:nth-child(4)");

  refreshButton.addEventListener("click", () => {
    alert("Refreshing camera feeds...");
    // Simulate refresh behavior here
  });

  flagButton.addEventListener("click", () => {
    alert("Feed has been flagged for review.");
    // Simulate flag behavior
  });

  disableButton.addEventListener("click", () => {
    disableButton.textContent = "🟢 Enable Camera";
    disableButton.style.backgroundColor = "#060";
    alert("Camera disabled.");
    // Simulate disable behavior
  });
});
