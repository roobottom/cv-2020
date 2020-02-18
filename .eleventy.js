const markdownIt = require("markdown-it")

module.exports = function (config) {

  //markdown
  let mdOptions = {
    typographer: true,
    quotes: '“”‘’',
    html: true
  }
  let md = markdownIt(mdOptions)
  config.setLibrary("md", md)

  config.addPairedShortcode("markdown", function(content) {
    return md.render(content)
  })




  //passthough
  config.addPassthroughCopy("_source/assets")


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