/**
 * Sends email text to backend API
 * @param {string} emailText
 * @returns {Promise<Object>}
 */
export async function detectSpam(emailText) {
    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: emailText })
    });

    if (!response.ok) {
        throw new Error("Failed to fetch spam prediction");
    }

    return response.json();
}
