---
title: 'Interaction-Aware Game-Theoretic Multi-Robot Shape Formation'
summary: 'UT Austin course project coupling goal assignment and trajectory planning for efficient and fair multi-robot shape formation.'
date: '2025-10-01'
tags: []
external_link: ''
image:
  caption: 'Multi-robot shape formation course project.'
  focal_point: 'Center'
  preview_only: true
_build:
  publishResources: false
---

**Course project:** Game-Theoretic Modeling of Multi-Agent Systems, The University of Texas at Austin.

**Team:** Shotaro Nako, Tianyu Qiu, and Zehao Wang. October 2025.

How should a team of robots choose their destinations and coordinate their motion to form a desired shape? Assigning goals using distance alone can overlook interactions along the way, leading to conflicts and uneven travel burdens. This project studies shape formation by coupling goal assignment with game-theoretic trajectory planning.

Our approach uses game-theoretic evaluations to update assignment costs and a minimax mixed-integer formulation to account for the robot with the greatest cost. The aim is to coordinate collision-free motion while balancing completion time and fairness across the team.

We compare the approach with greedy and Hungarian goal assignment in simulations of circular formation and successive letter formations spelling "UT AUSTIN." In these course-project experiments, our method completes the formations in fewer steps and reduces the maximum individual trajectory length relative to both baselines. The Hungarian baseline achieves a shorter mean trajectory length, illustrating the trade-off between aggregate travel and the burden on individual robots.

{{< project-media src="image24.gif" caption="Simulated robots forming successive letters in UT AUSTIN with interaction-aware goal assignment and planning." >}}
