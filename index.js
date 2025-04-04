fetch("https://api-server-o2u1.onrender.com/user", { method: "DELETE" })
  .then(response => console.log("All users deleted:", response.data))
  .catch(error => console.error("Failed to delete users", error));