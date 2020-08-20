export default (expenses) => {
    return expenses
        .map(() => expenses.amount)
        .reduce((sum, value) => sum + value, 0);
};