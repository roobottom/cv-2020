module.exports = function (config) {
  return {
    dir: {
      input: "_source",
      includes: "_includes",
      layouts: "_layouts",
      dataTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "njk"]
    }
  }
}