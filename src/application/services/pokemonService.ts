const formatPokemonName = (name: string) => {
    const splitName = name.replace(/-/g, ' ').split(' ');
    return splitName.map((elem) => elem.substring(0, 1).toUpperCase() + elem.substring(1)).join(' ');
};

const formatPokemonNumber = (number: number) => {
    if (number < 10) return `00${number}`;
    if (number < 100) return `0${number}`;
    return number;
};

export {
    formatPokemonName,
    formatPokemonNumber,
};
