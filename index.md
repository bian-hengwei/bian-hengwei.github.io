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

Hey there! I'm a second-year Master's student at [Carnegie Mellon University (CMU)](https://www.cmu.edu/). I graduated from [Nanyang Technological University (NTU)](https://www.ntu.edu.sg/) and had the chance to work under [Prof. Ziwei Liu](https://liuziwei7.github.io/) in [S-Lab](https://www.mmlab-ntu.com/). At CMU, I've been involved with some exciting research at [XuLab](https://xulabs.github.io/) under [Prof. Min Xu](https://xulabs.github.io/min-xu/), and I'm actively collaborating with [Dr. Liang Pan](https://scholar.google.com/citations?user=lSDISOcAAAAJ&hl=en) on several research projects.

Right now, I'm focused on some exciting stuff in 3D generation. I'm always up for a good chat, brainstorming session, or potential collaboration—so feel free to connect!

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

- Email: hengweib at andrew dot cmu dot edu
