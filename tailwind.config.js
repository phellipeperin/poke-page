const primary = '#DB2777';

const setThemeColors = (theme) => ({
    ...theme('colors'),
    primary,
});

module.exports = {
    theme: {
        textColor: setThemeColors,
        backgroundColor: setThemeColors,
        borderColor: setThemeColors,
    },
};
