# Editing Portfolio Cards

Use this as a quick local reference when adding or updating project cards.

## Research Project Cards

Open `research.html` and find:

```html
<section class="section" aria-label="Research projects">
```

To add a card, copy one full block:

```html
<article class="card">
  <img src="images/example.png" alt="Short image description">
  <div class="card-body">
    <h3>Project Title</h3>
    <p>Project description goes here.</p>
    <div class="actions">
      <a class="button" href="project-page.html">Read more</a>
    </div>
  </div>
</article>
```

Paste it inside the same `<div class="grid">`. Put new images in `images/research-page-thumbnails/` and update the `src`, `alt`, title, description, and links.

## UX Project Cards

Open `design.html` and find:

```html
<section class="section" aria-labelledby="ux-case-studies">
```

Cards work the same way. Put new card images in `images/uxProjects-page-thumbnails/`. Use `<p class="tagline">Term | Term | Term</p>` for skill tags.

## Card Styling

The shared card layout is in `styles.css`. The main reusable selectors are:

```css
.card
.card img
.card-body
.actions
.button
```

Page-specific card sizing lives under `.research-page` and `.ux-projects-page`.
