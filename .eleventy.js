const markdownIt = require("markdown-it")

module.exports = function (config) {

  //markdown
  let mdOptions = {
    typographer: true,
    quotes: '“”‘’',
    html: true
  }
  let md = markdownIt(mdOptions)



  //custom markdown syntax
  md.renderer.rules.image = function (tokens, idx, options, env, slf) {

    var token = tokens[idx]
    return '<div>Single div</div>'

  }

  config.setLibrary("md", md)


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