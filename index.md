---
layout: default
title: Home
nav_items:
  - title: About Me
    id: about
  - title: Publications
    id: publications
  - title: Contact
    id: contact
---

<img src="/assets/images/profile.jpg" alt="Hengwei Bian" class="profile-image">

{% include social_links.html %}

## About Me {#about}

{{ site.data.about.bio | markdownify }}

## Publications {#publications}

{% for publication in site.data.publications %}
  {% include publication_item.html
      id=publication.id
      img_src=publication.img_src
      title=publication.title
      authors=publication.authors
      venue=publication.venue
      pdf_link=publication.pdf_link
      code_link=publication.code_link
      project_link=publication.project_link
  %}
{% endfor %}

## Contact {#contact}

- Email: hb.acad at outlook dot com
