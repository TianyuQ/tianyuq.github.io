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
      # Show recent items only; 0 = no limit after the date filter
      count: 10
      filters:
        folders:
          - post
        # Automatically keep only posts from the past N years on each rebuild
        within_years: 1
        exclude_future: true
      order: desc
      archive:
        enable: true
        link: '/post/'
        text: 'See all news'
    design:
      view: list
      columns: '2'
---
