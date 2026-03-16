function formatBalance(balance) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(Math.abs(balance));
}

function formatDate(date) {
    new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });
}

export { formatBalance, formatDate };