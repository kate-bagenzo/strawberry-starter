---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - navbar
    - posts
permalink: /tags/{{ tag }}/
layout: layout.html
eleventyComputed:
  title: Tagged {{ tag }}
---

{% assign taglist = collections[ tag ] | forceReverse %}

{% for post in taglist %}
<article>
    <header class="tagged">
    <hr>
        <h2><a href="{{ post.url  }}">{{ post.data.title }}</a></h2>
        <time>{{ post.date | dateFormat }}</time>
    <hr>
    </header>
{{ post.content }}
</article>
{% endfor %}