---
layout: base
eleventyNavigation:
  key: About
  order: 1
---

## About Demos

**This was written in Markdown.**

Demos

<ul>
  <li>{{ github.stargazers_count }} stars</li>
	<li>{{ github.open_issues_count }} open issues</li>
  <li>{{ repos.length }}</li>
{#
  <li>{{ github }}</li>
	<li>{{ repo.stargazers_count }} stars</li>
	<li>{{ repo.open_issues_count }} open issues</li>  
  <li>{{ repo }}</li>
#}
</ul>

<ul>
{%- for repo in repos -%}
  <li>{{ repo.name }}</li>
{%- endfor -%}
</ul>