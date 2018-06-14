# HelloWorldAnnotated

This is a reference implementation of the following pattern:

1. A user selects text in a page

2. The selection will be the target of an annotation that anchors to it.

3. The content of the annotation results from custom user interaction governed by business logic.

This example runs from a bookmarklet. To try it, drag this link -- <a href="javascript:(function(){var d=document; var s=d.createElement('script');s.setAttribute('src','https://jonudell.info/h/HelloWorldAnnotated/gather.js');d.head.appendChild(s)})();">HelloWorldAnnotated</a> -- to your browser's bookmark bar, then visit a web page, make a selection, and click the bookmarklet.


