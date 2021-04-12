function total(addCount, addPrice, currentTotal) {
    if (currentTotal === undefined || Number.isNaN(currentTotal))
        currentTotal = 0;
    if (addCount === 0)
        return currentTotal;
    else
        currentTotal += addCount * addPrice;
    return currentTotal;
}

function total1(addCount, addPrice, currentTotal) {
    if (currentTotal === undefined || Number.isNaN(currentTotal))
        currentTotal = 0;
    if (addCount === 0)
        return currentTotal;
    else
        currentTotal += addCount * addPrice;
    return currentTotal;
}

function total2(addCount, addPrice, currentTotal) {
    if (currentTotal === undefined || Number.isNaN(currentTotal))
        currentTotal = 0;
    if (addCount === 0)
        return currentTotal;
    else
        currentTotal += addCount * addPrice;
    return currentTotal;
}
