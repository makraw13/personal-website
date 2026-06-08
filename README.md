# Michaela Krawczyk Portfolio Website

This is a static portfolio website. GitHub Pages can host it directly because the live pages are plain HTML and CSS.

## Main Files

- `index.html` is the home page.
- `research.html` lists research project cards.
- `publications.html` lists publications.
- `design.html` lists UX project cards.
- `resume.html` links to the CV and resume. The main navigation's `CV` link goes directly to the external CV document.
- `abortion-storytelling.html`, `daily-ux-writing-challenges.html`, and `wandering-peacock.html` are detail pages linked from project cards.
- `styles.css` controls the layout, colors, cards, buttons, headers, and footer.

## Images

All images used by the live website should live inside `images/`.

- `images/home-page/` has home page images.
- `images/CV-page/` has CV and resume page images.
- `images/research-page-thumbnails/` has images for cards on `research.html`.
- `images/uxProjects-page-thumbnails/` has images for cards on `design.html`.
- `images/abortionStorytelling-page/` has images for `abortion-storytelling.html`.
- `images/uxDailyWriting-page/` has images for `daily-ux-writing-challenges.html`.
- `images/wanderingPeacock-page/` has images for `wandering-peacock.html`.
- `images/legacy-exported-assets/` has archived copies of old exported images that are not used by the live pages.

When adding or replacing an image, put the file in the page's image subfolder and update the matching `src="images/..."` value in the HTML.

## Audio

The home page pronunciation button looks for this file:

```text
audio/michaela-krawczyk-pronunciation.mp3
```

Add your short name-pronunciation recording there using that exact filename. If you use a different filename or file type, update the `src` value in `index.html`.

## Editing Cards

Research and UX project cards are written directly in the page HTML.

To add a research project:

1. Open `research.html`.
2. Copy one full `<article class="card">...</article>` block inside the research grid.
3. Update the image path, heading, description, and links.
4. Put the card image in `images/research-page-thumbnails/`.

To add a UX project:

1. Open `design.html`.
2. Copy one full `<article class="card">...</article>` block inside the UX case studies grid.
3. Update the image path, heading, description, keywords, and links.
4. Put the card image in `images/uxProjects-page-thumbnails/`.

The keyword lines use `<p class="tagline">...</p>`.

## Styling

Shared colors are defined at the top of `styles.css`.

- `--accent` is the red button hover and keyword color.
- `--gold` is the yellow accent.
- `--blue` is the link hover color.
- `--ink` is the default black text color.

Regular hyperlinks are black and turn blue on hover. Card buttons keep their button styling.

## Reference Files

`reference-files-exported-wix/` contains old export/reference files. These are not the live pages GitHub Pages should serve.

Legacy asset folders contain old exported scripts and styles. Live website images should not be stored there; keep images in `images/` instead.

The old exported image files were copied into `images/legacy-exported-assets/`. Some original OneDrive placeholder copies could not be removed automatically because Windows denied access. See `OLD_IMAGE_PLACEHOLDERS_TO_REMOVE.txt` for the exact files that can be manually deleted after confirming everything looks right.

## Previewing Locally

From this folder, start a simple local server and open the site in a browser:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://127.0.0.1:8000/
```
