document.addEventListener("DOMContentLoaded", () => {
    const voteButtons = document.querySelectorAll(".vote-btn");

    // Create a unique key for this page
    const pageKey = window.location.pathname; 
    const votedKey = `hasVoted_${pageKey}`;
    const votesKey = `votes_${pageKey}`;

    // Check if the user already voted
    let hasVoted = localStorage.getItem(votedKey);

    voteButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (hasVoted) {
                alert("❌ You’ve already voted on this page!");
                return;
            }

            const name = button.textContent;

            // Get existing votes or start empty
            let votes = JSON.parse(localStorage.getItem(votesKey)) || {};

            // Add 1 vote to this person
            votes[name] = (votes[name] || 0) + 1;

            // Save votes and mark that user has voted
            localStorage.setItem(votesKey, JSON.stringify(votes));
            localStorage.setItem(votedKey, "true");

            alert(`✅ You voted for ${name}!`);
        });
    });
});
