# Tianyu Qiu — Personal Website

Hugo Academic (Hugo Blox) site for **https://tianyuq.github.io**

## Why builds failed before

GitHub’s default **“Deploy from a branch”** builder is Jekyll-only. A Hugo site cannot be built that way, which caused the old `pages build and deployment` failures.

## Pages setup (required once)

Use **one** of these:

### Option A (recommended): GitHub Actions
1. Repo **Settings → Pages → Source** → **GitHub Actions**
2. Open **Actions → “Deploy website to GitHub Pages” → Run workflow**

### Option B: Branch deploy from `/docs`
1. Repo **Settings → Pages → Source** → **Deploy from a branch**
2. Branch: `master` / folder: **`/docs`** (not `/ (root)`)

## Local development

```bash
hugo server -D
```
