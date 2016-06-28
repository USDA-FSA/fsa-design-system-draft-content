---
layout: default
title: Front Page
permalink: /

---

## All Drafted Content:

<ul>
{% for post in site.posts %}
  <li><span style="text-transform: capitalize;">{{ post.section }}</span>: <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
