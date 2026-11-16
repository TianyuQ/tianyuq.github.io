import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const markdownPath = path.join(directory, "resume.md");
const cssPath = path.join(directory, "resume.css");
const outputPath = path.join(directory, "resume.html");

const markdown = fs.readFileSync(markdownPath, "utf8").replace(/\r\n/g, "\n");
const css = fs.readFileSync(cssPath, "utf8");

function inline(text) {
    return text
        .replace(/<([^<>@\s]+@[^<>\s]+)>/g, '<a href="mailto:$1">$1</a>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

const lines = markdown.split("\n");
const output = [];
let index = 0;

while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
        index += 1;
        continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
        const level = heading[1].length;
        output.push(`<h${level}>${inline(heading[2])}</h${level}>`);
        index += 1;
        continue;
    }

    if (line.startsWith("<div ")) {
        output.push(line);
        index += 1;
        continue;
    }

    if (line.startsWith("- ")) {
        const items = [];
        while (index < lines.length && lines[index].startsWith("- ")) {
            items.push(`<li>${inline(lines[index].slice(2))}</li>`);
            index += 1;
        }
        output.push(`<ul>\n${items.join("\n")}\n</ul>`);
        continue;
    }

    const paragraph = [];
    while (
        index < lines.length &&
        lines[index].trim() &&
        !/^(#{1,4})\s+/.test(lines[index]) &&
        !lines[index].startsWith("- ") &&
        !lines[index].startsWith("<div ")
    ) {
        paragraph.push(lines[index]);
        index += 1;
    }
    const body = paragraph
        .map((part) => inline(part.replace(/\s{2}$/, "")))
        .join(paragraph.some((part) => /\s{2}$/.test(part)) ? "<br>\n" : " ");
    output.push(`<p>${body}</p>`);
}

const title = markdown.match(/^#\s+(.+)$/m)?.[1] ?? "Resume";
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>
${css}
</style>
</head>
<body>
<main id="resume">
${output.join("\n")}
</main>
</body>
</html>
`;

fs.writeFileSync(outputPath, html, "utf8");
console.log(`Wrote ${outputPath}`);
