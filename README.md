# HelloWorldAnnotated

This is a reference implementation of the following pattern:

<ol>
<li>Given a selection in a page, form the selectors needed to post an annotation that targets the selection.

<li>Lead a user through an interaction that influences the content of that annotation.

<li>Post the annotation.
</ol>


This example runs from a bookmarklet that you can install from <a href="http://jonudell.net/h/#bookmarklets">here</a>

javascript:(function(){var d=document; var s=d.createElement('script');s.setAttribute('src','https://jonudell.info/h/HelloWorldAnnotated/gather.js');d.head.appendChild(s)})();


