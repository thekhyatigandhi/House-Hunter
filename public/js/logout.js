const userLogout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/"); // When successful, load the homepage
    alert("Successfully logged out!");
  } else {
    alert("Failed to log out."); // When unsuccessful, show alert
  }
};
// Add an event listener to the logout button
document.querySelector("#logout").addEventListener("click", userLogout);
