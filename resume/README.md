# Resume source

This directory contains the editable Markdown and CSS source for Tianyu Qiu's resume.

The files follow the [`resume-markdown`](https://github.com/TianyuQ/resume-markdown) template. Edit `resume.md` for content and `resume.css` for styling. The font is Calibri (with Arial as a fallback).

From the repository root, regenerate `resume/resume.html` in PowerShell:

```powershell
.\resume\build.ps1
```

The script uses Node.js if available, or the existing per-user VS Code installation on Windows. If your terminal is already in the `resume` directory, run `.\build.ps1` instead.

With Node.js installed, you can also run `node resume/build.mjs` from the repository root. No npm packages are required.

Open the generated `resume.html` in Chrome or Edge (refresh an existing tab). Print with Ctrl+P: Save as PDF, Letter, portrait, 100% scale, default margins, and headers/footers off. Check the preview after any font or content change. Save the website PDF to `static/uploads/TianyuQiu_Resume.pdf`. Both the navigation CV link and the profile CV icon point to `/uploads/TianyuQiu_Resume.pdf`.

Rebuild after changing either Markdown or CSS: the HTML embeds both. Generating HTML does not automatically update the PDF.
