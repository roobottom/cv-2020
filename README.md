# [Jon Roobottom's CV](https://cv.roobottom.com)

This is my CV—or résumé for American friends. It's primarily a single web page that's built on [11ty](https://11ty.dev) and built/hosted on Netlify. 

Its party piece is the PDF generation. Each time the build completes, [PrinceXML](https://www.princexml.com/) runs via [a node wrapper](https://www.npmjs.com/package/prince) to combine the CV HMTL with a custom PDF CSS. Et voilà, an always-up-to-date CV PDF is produced. 