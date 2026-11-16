---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: collection
    id: news
    content:
      title: News
      # Display the full news history.
      count: 0
      filters:
        folders:
          - post
        exclude_future: true
      order: desc
      archive:
        enable: false
    design:
      view: news-text
      columns: '2'
  - block: collection
    id: publications
    content:
      title: Publications
      count: 0
      filters:
        folders:
          - publication
        exclude_future: true
      order: desc
      archive:
        enable: false
    design:
      view: citation
      columns: '2'
---
