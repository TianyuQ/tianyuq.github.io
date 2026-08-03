---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

A PDF version of my CV/resume is available [here]({{ base_path }}/files/Tianyu_Qiu_Resume.pdf).

Education
======
* Ph.D. in Aerospace Engineering, The University of Texas at Austin, 2023–2028 (expected)
  * Advisor: Prof. David Fridovich-Keil
* M.Eng. in Electronic Information, Shanghai Jiao Tong University, 2020–2023
  * Advisor: Prof. Jingchuan Wang
* B.Eng. in Electrical & Computer Engineering, Shanghai Jiao Tong University, 2016–2020
* High School Diploma, Shanghai High School, 2016

Research Experience
======
* 2023–present: Graduate Research Assistant
  * CLeAR Lab, The University of Texas at Austin
  * Research in game-theoretic planning, multi-robot interaction, and robot navigation
  * Advisor: Prof. David Fridovich-Keil

* 2020–2023: Graduate Research Assistant
  * Shanghai Jiao Tong University
  * Master's thesis on social navigation for mobile robots based on inverse dynamic games
  * Advisor: Prof. Jingchuan Wang

Skills
======
* Programming: Python, C/C++, MATLAB
* Research: Game theory, reinforcement learning, optimal control, multi-agent planning

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
