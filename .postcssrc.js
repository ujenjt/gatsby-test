module.exports = {
  plugins: [
    require("@webteam/postcss-preset")({
      customMedia: [
        '@webteam/breakpoints/lib/index.pcss'
      ],
      customProperties: [
        "@webteam/colors/lib/index.css"
      ],
    }),
  ]
}
