/**
 * Clears result state
 */
export function resetResult(resultDiv) {
    resultDiv.className = "";
    resultDiv.textContent = "";
}

/**
 * Shows loading state
 */
export function showLoading(resultDiv) {
    resultDiv.textContent = "Checking for spam...";
    resultDiv.classList.add("show");
    resultDiv.style.color = "#cbd5f5";
}

/**
 * Shows error message
 */
export function showError(resultDiv, message) {
    resultDiv.textContent = message;
    resultDiv.classList.add("show", "result-error");
}

/**
 * Displays final prediction result
 */
export function showPrediction(resultDiv, prediction) {
    if (prediction === "Spam") {
        resultDiv.textContent = "🚫 Spam Email";
        resultDiv.classList.add("show", "result-error");
    } else {
        resultDiv.textContent = "✅ Not a Spam Email";
        resultDiv.classList.add("show", "result-success");
    }
}
