---
name: james-actor-site-maintainer
description: Use when maintaining James Macapagal's acting website, including updating reel links, headshots, resume, bio, contact details, React components, styling, production builds, Git commits, pushes, and GitHub Pages deploys for the local actor website repository.
---

# James Actor Site Maintainer

Use this skill as James Macapagal's personal web developer for the acting website.

## Site Facts

- Repository: `/Users/jamesmacapagal/Development/jamesmacapagal-actor-website`
- Current production site: `https://www.jamesmacapagal.com`
- Framework: React 18 with Create React App
- Deployment: GitHub Pages via `npm run deploy`
- Main branch: `main`
- Git remote: `origin`
- Important existing untracked local files may include `.idea/` and `public/CNAME`; do not remove, stage, or overwrite them unless James explicitly asks.

## Common Update Locations

- Reel section: `src/components/Reels.js`
- Homepage hero: `src/components/Hero.js` and `src/components/Hero.css`
- Navigation: `src/components/Navbar.js` and `src/components/Navbar.css`
- About/bio: `src/components/About.js`
- Resume: `src/components/Resume.js`
- Contact: `src/components/Contact.js`
- Global app shell and styling: `src/App.js`, `src/App.css`, `src/index.css`
- Public images and static assets: `public/`

## Working Style

- Treat requests as production website maintenance unless James says it is exploratory.
- Keep changes small, direct, and consistent with the existing React component and CSS style.
- Preserve James's brand as an actor: clear, professional, media-forward, easy for casting and industry visitors to scan.
- Avoid unrelated redesigns, dependency changes, generated metadata churn, or cleanup work.
- For YouTube watch or share URLs, convert to embed URLs in the form `https://www.youtube.com/embed/VIDEO_ID` when used inside an iframe.
- If replacing media, verify the referenced file exists and use stable asset paths that work in Create React App.

## Standard Workflow

1. Inspect the current branch and working tree.
2. Locate the relevant component or asset with `rg`.
3. Make the smallest suitable edit.
4. Run `npm run build` for user-facing or deploy-bound changes.
5. Review `git diff` and stage only files changed for the requested task.
6. Commit with a concise message.
7. Push to `origin main` when James asks to push updates.
8. Deploy with `npm run deploy` when James asks to deploy to production.

## Verification

- Always run `npm run build` before committing deploy-bound changes.
- Treat stale Browserslist or npm version notices as non-blocking warnings unless the build fails.
- If `npm` reports cache permission errors in `/Users/jamesmacapagal/.npm`, retry with:

```bash
npm_config_cache=/private/tmp/npm-cache npm run build
```

or for deployment:

```bash
npm_config_cache=/private/tmp/npm-cache npm run deploy
```

- If GitHub publishing fails due to network access, request network permission and retry.

## Deploy Routine

When James asks to deploy production from `main`:

1. Confirm the current branch is `main` and it is in sync with `origin/main`.
2. Do not deploy unrelated uncommitted tracked changes.
3. Run `npm run deploy`.
4. If needed, retry with the temporary npm cache command above.
5. Report whether the build and publish completed.

## Git Hygiene

- Do not stage `.idea/` or `public/CNAME` just because they appear untracked.
- Do not revert or delete user changes unless James explicitly asks.
- If a request includes "push the updates," commit the requested tracked changes and push to `origin main`.
- If a request only asks for local edits, do not push or deploy unless asked.
