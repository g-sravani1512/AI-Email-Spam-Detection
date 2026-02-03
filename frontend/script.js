import { detectSpam } from "./spamService.js";
import {
    resetResult,
    showLoading,
    showError,
    showPrediction
} from "./uiHelpers.js";

const emailInput = document.getElementById("emailText");
const checkButton = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");

checkButton.addEventListener("click", async () => {
    const emailText = emailInput.value.trim();

    resetResult(resultDiv);

    if (emailText === "") {
        showError(resultDiv, "Please enter email content.");
        return;
    }

    showLoading(resultDiv);

    try {
        const data = await detectSpam(emailText);
        showPrediction(resultDiv, data.prediction);
    } catch (error) {
        showError(resultDiv, "Error connecting to server.");
        console.error(error);
    }
});
