function gather() {

  const selection = document.getSelection()
  if (! selection.rangeCount ) {
    alert("Please select some text.")
    return
  }

  const range = selection.getRangeAt(0)
  const quoteSelector = anchoring.TextQuoteAnchor.fromRange(document.body, range)
  const exact = quoteSelector.exact
  const prefix = quoteSelector.prefix

  const positionSelector = anchoring.TextPositionAnchor.fromRange(document.body, range)
  const start = positionSelector.start
  const end = positionSelector.end

  const titleElement = document.querySelector('head title')
  const title = titleElement ? titleElement.innerText : location.href

  const data = {
    uri: location.href,
    title: title,
    exact: exact,
    prefix: prefix,
    start: start,
    end: end,
  }

  const encodedData = encodeURIComponent(JSON.stringify(data))

  console.log(encodedData)

  location.href = `https://jonudell.info/h/HelloWorldAnnotated?data=${encodedData}`
}

var script = document.createElement('script')
script.src='https://cdn.rawgit.com/judell/anchoring/master/dist/anchoring.js'
document.head.appendChild(script)
setTimeout(gather, 1000); // wait for anchoring support to load

