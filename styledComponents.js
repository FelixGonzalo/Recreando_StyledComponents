function createStyledApi(tags, tagsSelfClosing) {
  const styled = {}
  tags.forEach((tag, index) => {
      styled[tag] = function(styles){
        return tagsSelfClosing.includes(tag)
        ? (content) => `<${tag} style="${styles}" src="${content}" />`
        : (content) => `<${tag} style="${styles}">${content}</${tag}>`
      }
  })
  return styled
}
const tags = ['h1', 'h2', 'h3', 'p', 'span', 'div', 'section', 'footer', 'header', 'img']
const tagsSelfClosing = ['img']

const styled = createStyledApi(tags, tagsSelfClosing)