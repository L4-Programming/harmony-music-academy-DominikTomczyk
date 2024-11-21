export function calculateCosts(data) {
    console.log("Calculating costs...")
    

    const hoursCostsPerLevel = {
        basic: 12.25,
        advanced: 15.50
    };

    const totalData = {
        totalCost: (data["userHours"] * hoursCostsPerLevel[data["userLevel"]]).toFixed(2),
        email: data["userEmail"],
        hours: data["userHours"],
        level: data["userLevel"]
    };

    return totalData
}