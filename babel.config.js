module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                modules: "umd",
                useBuiltIns:"usage",
                corejs:3,
            }
        ]
    ],
    "plugins": [
        "@vue/babel-plugin-transform-vue-jsx"
    ],
}
