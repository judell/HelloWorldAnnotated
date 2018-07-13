# HelloWorldAnnotated

This is a reference implementation of the following pattern:

<ol>
<li>Given a selection in a page, form the selectors needed to post an annotation that targets the selection.

<li>Lead a user through an interaction that influences the content of that annotation.

<li>Post the annotation.
</ol>

This example runs from a bookmarklet.

You can "install" it by dragging the HelloWorldAnnotated link from http://jonudell.net/h/#bookmarklets to your browser's bookmarks 
bar, or editing an existing bookmark and inserting this text in the URL field: 

> javascript:(function(){var d=document; var s=d.createElement('script');s.setAttribute('src','https://jonudell.info/h/HelloWorldAnnotated/gather.js');d.head.appendChild(s)})();"

Screencast: http://jonudell.net/h/HelloWorldAnnotated.mp4

Blog post: https://blog.jonudell.net/2018/06/21/annotation-powered-apps-a-hello-world-example/


