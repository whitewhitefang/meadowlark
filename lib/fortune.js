const fortunes = [
    'Strike your fears, otherwise your fears will strike you',
    'Every river need its creeks',
    'Don`t be afraid of unknown',
    'Pleasant surprise is waiting you',
    'Be simple anywhere and anytime'
];
exports.getFortune = () => {
    const id = Math.floor(Math.random() * fortunes.length);
    return fortunes[id];
};