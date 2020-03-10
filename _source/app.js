(function(d, w) {
  const header = d.querySelector('header')
  const head = d.querySelector('head')

  const colors = {
    yellow: [42, 69, 93],
    green: [161, 44, 80],
    blue: [220, 100, 86],
    purple: [272, 93, 100],
    red: [11, 64, 91]
  }

  function hsv_to_hsl(h, s, v) {
    var l = (2 - s) * v / 2;
    if (l != 0) {
        if (l == 1) {
            s = 0
        } else if (l < 0.5) {
            s = s * v / (l * 2)
        } else {
            s = s * v / (2 - l * 2)
        }
    }
    return [h, s, l]
  }

  const transformColor = (colorId) => {

    let color = colors.red
    let hsl = hsv_to_hsl(color)

    let css = d.createElement('style')
    css.type = 'text/css'
    let styles = `header:before {background-color: hsl(${color[0]}%, ${color[1]}%, ${color[2]}%); }`
    css.appendChild(d.createTextNode(styles))
    head.appendChild(css)
  }

  for (let key in colors) {
    let c = colors[key]
    console.log(key, c, hsv_to_hsl(c[0], c[1], c[2]))
  }

  header.addEventListener('click', () => {
    transformColor('yellow')
  })



})(document, window)