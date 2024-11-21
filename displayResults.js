export function displayResults(output) {
    console.log("Displaying final results...")
    console.log(output)

    let results = document.querySelector("#result")

    results.innerHTML = `
        <dl>
            <dt>Email:</dt>
            <dd>${output.email}</dd>
        </dl>
        <dl>
            <dt>Study level:</dt>
            <dd>${output.level}</dd>
        </dl>
        <dl>
            <dt>Hours of study per week:</dt>
            <dd>${output.hours}</dd>
        </dl>
        <dl>
            <dt>Total cost per week:</dt>
            <dd>£${output.totalCost}</dd>
        </dl>
    `;
}