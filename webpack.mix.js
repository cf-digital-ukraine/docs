const mix = require("laravel-mix");
const webpack = require("webpack");
const path = require('path');

const fs = require("fs"); // i dont know what is it, but mqpacker without this - dont work. Maybe FileSystem?
const mqpacker = require("css-mqpacker"); // combaine all media queries by a groups
const sortCSSmq = require("sort-css-media-queries"); //custom sorting for mqpacker

mix.options({
    processCssUrls: false, // dont copy files by links from css
    autoprefixer: false,
    postCss: [
        require("css-mqpacker")({
            sort: sortCSSmq
        }),
        require("autoprefixer")({
            grid: "autoplace",
            remove: true
        })
    ]
});

mix.webpackConfig({
    resolve: {
        extensions: [".js"],
        modules: ["node_modules"],
        alias: {}
    }
});

if (mix.inProduction()) {
    mix.options({
        clearConsole: true,
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        }
    });
}
// mix.styles("resources/app.css", "assets/css/docs.css");