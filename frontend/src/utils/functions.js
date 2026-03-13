function formatBalance(balance) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(Math.abs(balance));
}

export { formatBalance };