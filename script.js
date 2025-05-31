async function sendToAI() {
  const input = document.getElementById("input").value;
  const responseBox = document.getElementById("response");

  responseBox.textContent = "Thinking...";

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
      method: "POST",
      headers: {
        "Authorization": "Bearer ",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: input })
    });

    const data = await response.json();
    responseBox.textContent = data[0]?.generated_text || "No response.";
  } catch (err) {
    responseBox.textContent = "Error: " + err.message;
  }
}
