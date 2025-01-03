// Get the element with the ID "insert"
const insert = document.getElementById("insert");

// Add an event listener for the "keydown" event
window.addEventListener("keydown", (event) => {
  // Update the innerHTML of the "insert" element with the event details
  insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? "Space" : event.key}
      <small>event.key</small>
    </div>
    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `;
});
