function render(container, ...components) {
  components.forEach(component => {
    container.innerHTML += component
  });
}

function createTaggedTemplate(strings, ...dynamicValues) {
  return function(props) {
    let newContent = strings.slice()
    dynamicValues.forEach((value, index) => {
      newContent[index] += props[value]
    })
    return newContent.join('')
  }
}