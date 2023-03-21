const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],

    theme: {
        extend: {
            backgroundColor: {
                custom: "#0f5c53",
                custom_hover: "#158275",
                "custom-100": "#F0F8F7",
                "blue-dianne": "#254154",
            },
            colors: {
                custom: "#0f5c53",
                custom_hover: "#158275",
                "custom-100": "#F0F8F7",
                "blue-dianne": "#254154",
            },
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                helvetica_light: ["HelveticaNeue-Light", "sans-serif"],
            },
            spacing: {
                19: "75px",
                136: "34rem",
                150: "37rem",
                500: "1100px",
                430: "580px",
                480: "890px",
                510: "1120px",
                520: "1130px",
                540: "1170px",
                550: "1215px",
            },
            opacity: {
                0.2: "0.2",
                0.5: "0.5",
                0.7: "0.7",
            },
            screens: {
                sm: "576px",
                md: "1280px",
                lg: "1440px",
                xl: "1920px",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
