# Michaela Krawczyk Portfolio Website

This is a static portfolio website. GitHub Pages can host it directly because the live site is built with plain HTML, CSS, JavaScript, images, and audio files.

## Main Files

- `index.html` is the home page.
- `research.html` lists research project cards.
- `publications.html` lists publications.
- `design.html` lists UX project cards.
- `abortion-storytelling.html`, `daily-ux-writing-challenges.html`, and `wandering-peacock.html` are project detail pages.
- `resume.html` is an older local page; the main navigation's `CV` link currently goes directly to the external CV PDF.
- `styles.css` controls layout, colors, cards, buttons, headers, footers, responsive design, and image sizing/cropping.
- `site.js` controls the mobile hamburger menu.

## Live Folders

- `images/` stores all website images.
- `audio/` stores audio files used by the website.
- `IGNORE/` is not part of the live website.

GitHub Pages should serve the root HTML files, `styles.css`, `site.js`, `images/`, and `audio/`.

## Images

All images used by the live website should live inside `images/`.

- `images/home-page/` has home page images.
- `images/CV-page/` has CV/resume-related images.
- `images/research-page-thumbnails/` has images for cards on `research.html`.
- `images/uxProjects-page-thumbnails/` has images for cards on `design.html`.
- `images/abortionStorytelling-page/` has images for `abortion-storytelling.html`.
- `images/uxDailyWriting-page/` has images for `daily-ux-writing-challenges.html`.
- `images/wanderingPeacock-page/` has images for `wandering-peacock.html`.

When adding or replacing an image, put the file in the page's image subfolder and update the matching `src="images/..."` value in the HTML.

## Audio

The home page pronunciation button currently uses:

```text
audio/MichaelaKrawczyk-namePronounciation.m4a
```

If you replace the recording with a different filename or file type, update the `<audio>` `src` value in `index.html`.

## Navigation

Every live page uses the same header structure:

- The logo/name links to `index.html`.
- The navigation links to Research, Publications, UX Projects, and the external CV PDF.
- On small screens, `site.js` turns the navigation into a hamburger menu.

If you add a new live HTML page, copy the header from an existing page so it includes:

- the `menu-toggle` button,
- `<nav class="site-nav" id="site-nav" aria-label="Site">`,
- `<script src="site.js"></script>` before `</body>`.

## Editing Cards

Research and UX project cards are written directly in the page HTML.

To add a research project:

1. Open `research.html`.
2. Copy one full `<article class="card">...</article>` block inside the research grid.
3. Update the image path, heading, description, keywords, and links.
4. Put the card image in `images/research-page-thumbnails/`.

To add a UX project:

1. Open `design.html`.
2. Copy one full `<article class="card">...</article>` block inside the UX case studies grid.
3. Update the image path, heading, description, keywords, and links.
4. Put the card image in `images/uxProjects-page-thumbnails/`.

The keyword lines use:

```html
<p class="tagline">Keyword | Keyword | Keyword</p>
```

## Styling

Shared colors are defined at the top of `styles.css`.

- `--accent` is the red keyword/button-hover color.
- `--gold` is the yellow accent.
- `--blue` is the link/title hover color.
- `--ink` is the default black text color.

Regular hyperlinks are black and turn blue on hover. Card buttons keep their button styling.

Responsive layout rules are also in `styles.css`. The home page stacks the intro text above the portrait on small screens, and the mobile navigation collapses into a hamburger menu.

## Stylesheet Versioning

HTML pages link to the stylesheet with a version number, like:

```html
<link rel="stylesheet" href="styles.css?v=20260608-3">
```

This helps browsers and GitHub Pages load the newest CSS after an upload.

When you edit `styles.css`, also update the version number in any HTML page affected by that CSS change. If the style change affects the whole website, update the version number in all live HTML files.

## Previewing Locally

From this folder, start a simple local server:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Uploading Changes To GitHub

After each change, upload every file that changed.

Common examples:

- If you edit page content, upload that `.html` file.
- If you edit styling, upload `styles.css` and any `.html` files whose stylesheet version number changed.
- If you edit the mobile menu behavior, upload `site.js`.
- If you add or replace an image, upload the image file and any HTML/CSS file that references it.
- If you add or replace audio, upload the audio file and any HTML file that references it.

Recent examples:

- Home page mobile layout changes require `index.html` and `styles.css`.
- The name pronunciation audio requires `index.html`, `audio/README.md`, and `audio/MichaelaKrawczyk-namePronounciation.m4a`.
- The Daily UX Writing Challenge image crop requires `daily-ux-writing-challenges.html` and `styles.css`.
