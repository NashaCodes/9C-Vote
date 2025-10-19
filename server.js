document.addEventListener("DOMContentLoaded", () => {
  const voteButtons = document.querySelectorAll(".vote-btn");

  voteButtons.forEach(button => {
    button.addEventListener("click", async () => {
      const name = button.textContent;
      const page = window.location.pathname;

      try {
        const res = await fetch('http://localhost:3000/vote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page, vote: name })
        });

        const data = await res.json();
        if (data.success) alert(`✅ You voted for ${name}!`);
        else alert('❌ Something went wrong.');
      } catch (err) {
        alert('❌ Cannot connect to server.');
      }
    });
  });
});
