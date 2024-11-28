export function displayResults(output) {
    let results = document.querySelector("#result")

    results.innerHTML = `
        <dl>
            <dt>Email:</dt>
            <dd>${output.email}</dd>
            <dt>Study level:</dt>
            <dd>${output.level}</dd>
            <dt>Hours of study per week:</dt>
            <dd>${output.hours}</dd>
            <dt>Total cost per week:</dt>
            <dd>£${output.totalCost}</dd>
        </dl>
    `;
}