const form = document.getElementById("experienceForm");
const postsContainer = document.getElementById("postsContainer");

// Function to create a post element dynamically
function createPostElement(name, activity, date, story) {
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `
    <h3>${activity}</h3>
    <div class="meta">By <strong>${name}</strong> on ${date}</div>
    <p>${story}</p>
  `;
  return div;
}

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const activity = document.getElementById("activity").value.trim();
  const date = document.getElementById("date").value;
  const story = document.getElementById("story").value.trim();

  if (!name || !activity || !date || !story) return;

  const postEl = createPostElement(name, activity, date, story);
  postsContainer.prepend(postEl);

  form.reset();
});
