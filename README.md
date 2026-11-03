# DigiSafe Keralam

DigiSafe Keralam is a bilingual cyber-safety website for students aged 10–19. It is an initiative of the Social Engagement Centre at Digital University Kerala.

## Pages

- **Home** — introduces the initiative and cyber-safety resources.
- **About** — background on the project.
- **Learn** — short videos introducing DigiSafe, Ray, and Rogue.
- **Our Team** — the people behind the initiative.
- **Login, Register, Dashboard** — account and learner dashboard pages.
- **Malayalam** — localized versions of the main pages under `/ml/`.

## Run locally

The site is built from static HTML, CSS, JavaScript, and assets; it has no build step or project dependencies. Its navigation uses extensionless URLs, so use a server that maps those URLs to `.html` files.

With Node.js and npm installed, run this from the project directory:

```bash
npx http-server . -p 8000 -e html
```

Then open <http://localhost:8000>. The first run may download `http-server`.

For deployment, serve the project from the web root on Apache or LiteSpeed with `mod_rewrite` enabled so the included `.htaccess` can handle clean URLs, compression, and caching.

## Contributions

Keep commits focused and use descriptive commit messages that summarize the change. Add context in the commit body when the reason or impact is not obvious.

## Project structure

```text
.
├── assets/       Shared styles, scripts, fonts, and images
├── ml/           Malayalam pages
├── team-photos/  Team photographs
├── *.html        English pages
└── .htaccess     Apache clean URLs and web-server settings
```

## Cyber-fraud reporting

In India, call **1930** or visit [cybercrime.gov.in](https://cybercrime.gov.in) to report cyber fraud.
