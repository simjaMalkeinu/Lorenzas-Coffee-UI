async function postData(url = "", data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: "POST",
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }