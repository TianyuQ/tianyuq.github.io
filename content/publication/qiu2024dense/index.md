---
research_area: 'Robot Learning'
title: 'Dense Dynamics-Aware Reward Synthesis: Integrating Prior Experience with Demonstrations'
authors:
  - Cevahir Koprulu
  - Po-Han Li
  - admin
  - Ruihan Zhao
  - Tyler Westenbroek
  - David Fridovich-Keil
  - Sandeep Chinchali
  - Ufuk Topcu
date: '2025-01-01'
publishDate: '2025-01-01'
publication_types: ['paper-conference']
publication: 'Proceedings of the 7th Annual Learning for Dynamics & Control Conference (L4DC), PMLR 283:894–906'
publication_short: 'L4DC 2025'
abstract: Many continuous control problems can be formulated as sparse-reward reinforcement learning (RL) tasks. In principle, online RL methods can automatically explore the state space to solve each new task. However, discovering sequences of actions that lead to a non-zero reward becomes exponentially more difficult as the task horizon increases. Manually shaping rewards can accelerate learning for a fixed task, but it is an arduous process that must be repeated for each new environment. We introduce a systematic reward-shaping framework that distills the information contained in 1) a task-agnostic prior data set and 2) a small number of task-specific expert demonstrations, and then uses these priors to synthesize dense dynamics-aware rewards for the given task. This supervision substantially accelerates learning in our experiments, and we provide analysis demonstrating how the approach can effectively guide online learning agents to faraway goals.
summary: Reward shaping that combines task-agnostic prior data with a few expert demonstrations to synthesize dense dynamics-aware rewards.
tags: []
featured: true
links:
  - name: Project Page
    url: '/project/dense-demo/'
url_pdf: 'https://arxiv.org/pdf/2412.01114.pdf'
---

