---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Welcome to my personal website!  I am Zhiyuan Liu (Chinese: 刘知远), a self-driven undergraduate student majoring in Software Engineering at Harbin Institute of Technology (HIT).

My research interest centers around the fundamental question: ***How can we make large models more efficient, more generalizable, and more accessible?*** As the size and complexity of modern models continue to grow, so do their training and inference costs. This has created a pressing need to rethink how we construct and use large models—from data representation to computational design. I am especially motivated by the challenge of enhancing large model capabilities **without relying solely on scale**, but instead through **methodological innovation**.

To this end, I have explored several key directions including **inference acceleration, data distillation, and model compression**.

# 🔥 News

- *2025.07*: &nbsp;🎉 We released the paper "The Devil behind the mask: An emergent safety vulnerability of Diffusion LLMs".
- *2025.06*: &nbsp;🤗 Started Research Intern at [Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/), focusing on AI Security.
- *2025.06*: &nbsp;🎉 We released the paper "Accelerating Diffusion Large Language Models with SlowFast Sampling".
- *2025.05*: &nbsp;🎉 We released the paper "dLLM-Cache: Accelerating Diffusion Large Language Models with Adaptive Caching". [![GitHub stars](https://img.shields.io/github/stars/maomaocun/dLLM-cache.svg?style=social&label=Star&maxAge=2592000)](https://github.com/maomaocun/dLLM-cache)
- *2025.02*: &nbsp;🎉 Paper "Dataset Distillation with Neural Characteristic Function: A Minmax Perspective" was accepted by CVPR 2025 (Rating: 5/5/5). Thanks!  [![GitHub stars](https://img.shields.io/github/stars/gszfwsb/NCFM.svg?style=social&label=Star&maxAge=2592000)](https://github.com/gszfwsb/NCFM)
- *2025.01*: &nbsp;🤗 We release an open-sourse repo "[Awesome Dataset Reduction](https://github.com/gszfwsb/Awesome-Dataset-Reduction)", which collects recent awesome dataset reduction papers! Feel free to contribute your suggestions! [![GitHub stars](https://img.shields.io/github/stars/gszfwsb/Awesome-Dataset-Reduction.svg?style=social&label=Star&maxAge=2592000)](https://github.com/gszfwsb/Awesome-Dataset-Reduction) 
- *2024.08*: &nbsp;🤗 Started Research Intern at [EPIC Lab](http://www.zhanglinfeng.tech/), Shanghai Jiao Tong University, focusing on Efficient Inference Methods, Dataset Distillation and Knowledge Distillation.

# 📝 Publications (* denotes the equal contribution.)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/dLLM-Cache_pipeline.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[dLLM-Cache: Accelerating Diffusion Large Language Models with Adaptive Caching](https://arxiv.org/abs/2506.06295)

**Zhiyuan Liu** *, Yicun Yang *, Yaojie Zhang, Junjie Chen, Chang Zou, Qingyan Wei, Shaobo Wang, Linfeng Zhang.
-  Pioneered dLLM-Cache, a novel approach to accelerate diffusion large language models (dLLMs) by leveraging adaptive caching techniques.
- dLLM-Cache achieves up to **9.1x** speedup over standard dLLM pipelines, with **no performance loss** on most tasks.
- [**Project**](https://github.com/maomaocun/dLLM-cache) [![GitHub stars](https://img.shields.io/github/stars/maomaocun/dLLM-cache.svg?style=social&label=Star&maxAge=2592000)](https://github.com/maomaocun/dLLM-cache) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025 Highlight (Rating: 5/5/5)</div><img src='images/NCFM-pipeline.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Dataset Distillation with Neural Characteristic Function: A Minmax Perspective](https://arxiv.org/abs/2502.20653)

Shaobo Wang, Yicun Yang, **Zhiyuan Liu**, Chenghao Sun, Xuming Hu, Conghui He, Linfeng Zhang
- Pioneered NCFM, a novel dataset distillation approach that reframes the problem from a Characteristic Function perspective. This innovative approach casts dataset distillation within a min-max framework.
- NCFM achieves state-of-the-art performance while drastically reducing GPU memory requirements to **1/300th** of prior leading methods and accelerating training by **20x**.
- [**Project**](https://github.com/gszfwsb/NCFM) [![GitHub stars](https://img.shields.io/github/stars/gszfwsb/NCFM.svg?style=social&label=Star&maxAge=2592000)](https://github.com/gszfwsb/NCFM) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/slowfast-sampling.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Accelerating Diffusion Large Language Models with SlowFast Sampling: The Three Golden Principles](https://arxiv.org/abs/2506.10848)

Qingyan Wei, Yaojie Zhang, **Zhiyuan Liu**, Dongrui Liu, Linfeng Zhang.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/DIJA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[The Devil Behind the Mask: An Emergent Safety Vulnerability of Diffusion LLMs](https://arxiv.org/abs/2507.11097)

Zichen Wen, Jiashu Qu, Dongrui Liu, **Zhiyuan Liu**, Chaochao Lu, Jing Shao, Conghui He, Linfeng Zhang, et al.
</div>
</div>

# 🎖 Honors and Awards
- *2023.12* National Scholarship (Top 1%), Ministry of Education of China
- *2023.11* Huawei Smart Base Scholarship (Top 1%), Huawei Technologies Co., Ltd.

# 📖 Educations
- *2022.08 - 2026.06*, Harbin Institute of Technology, Bachelor of Software Engineering

# 💻 Internships
- *2024.08 - Present*, Research Intern, EPIC Lab, Shanghai Jiao Tong University (Advised by Prof. [Linfeng Zhang](http://www.zhanglinfeng.tech/)).

- *2025.06 - Present*, Research Intern, Shanghai Artificial Intelligence Laboratory (Advised by Prof. [Jing Shao](https://amandajshao.github.io/)).