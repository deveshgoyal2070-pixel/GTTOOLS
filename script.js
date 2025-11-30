// =============================
// GTTOOLS – FINAL script.js
// 100 Tools (Text + PDF + Dev + Utility + Image)
// Backend for PDF: https://gttools-api.onrender.com
// =============================

// ---------- TOOL DEFINITIONS (100 TOTAL) ----------

const tools = [
  // ===== TEXT TOOLS (36) =====
  { id: "text-word-count", name: "Word Counter", category: "text" },
  { id: "text-char-count", name: "Character Counter", category: "text" },
  { id: "text-line-count", name: "Line Counter", category: "text" },
  { id: "text-sentence-count", name: "Sentence Counter", category: "text" },
  { id: "text-remove-extra-spaces", name: "Remove Extra Spaces", category: "text" },
  { id: "text-trim-lines", name: "Trim Lines", category: "text" },
  { id: "text-remove-empty-lines", name: "Remove Empty Lines", category: "text" },
  { id: "text-remove-duplicate-lines", name: "Remove Duplicate Lines", category: "text" },
  { id: "text-sort-az", name: "Sort Lines A → Z", category: "text" },
  { id: "text-sort-za", name: "Sort Lines Z → A", category: "text" },
  { id: "text-shuffle-lines", name: "Shuffle Lines", category: "text" },
  { id: "text-upper", name: "Uppercase Converter", category: "text" },
  { id: "text-lower", name: "Lowercase Converter", category: "text" },
  { id: "text-title", name: "Title Case Converter", category: "text" },
  { id: "text-sentence", name: "Sentence Case Converter", category: "text" },
  { id: "text-toggle-case", name: "Toggle Case", category: "text" },
  { id: "text-reverse", name: "Reverse Text", category: "text" },
  { id: "text-reverse-lines", name: "Reverse Lines", category: "text" },
  { id: "text-find-replace", name: "Find & Replace (simple)", category: "text" },
  { id: "text-remove-punct", name: "Remove Punctuation", category: "text" },
  { id: "text-extract-numbers", name: "Extract Numbers", category: "text" },
  { id: "text-extract-emails", name: "Extract Emails", category: "text" },
  { id: "text-extract-urls", name: "Extract URLs", category: "text" },
  { id: "text-extract-hashtags", name: "Extract Hashtags", category: "text" },
  { id: "text-slug-generator", name: "Slug Generator", category: "text" },
  { id: "text-hashtag-generator", name: "Hashtag Generator", category: "text" },
  { id: "text-reading-time", name: "Reading Time Estimator", category: "text" },
  { id: "text-deduplicate", name: "Text Deduplicator (lines)", category: "text" },
  { id: "text-prefix-lines", name: "Prefix Lines", category: "text" },
  { id: "text-suffix-lines", name: "Suffix Lines", category: "text" },
  { id: "text-add-line-numbers", name: "Add Line Numbers", category: "text" },
  { id: "text-remove-line-numbers", name: "Remove Line Numbers", category: "text" },
  { id: "text-diff-simple", name: "Text Difference (Simple)", category: "text" },
  { id: "text-word-frequency", name: "Word Frequency Counter", category: "text" },
  { id: "text-to-binary", name: "Text → Binary", category: "text" },
  { id: "binary-to-text", name: "Binary → Text", category: "text" },

  // ===== IMAGE TOOLS (15) =====
  { id: "img-resize", name: "Image Editor: Resize / Transform", category: "image" },
  { id: "img-crop", name: "Image Editor: Crop (basic)", category: "image" },
  { id: "img-rotate", name: "Image Editor: Rotate", category: "image" },
  { id: "img-flip", name: "Image Editor: Flip", category: "image" },
  { id: "img-grayscale", name: "Image Editor: Grayscale", category: "image" },
  { id: "img-invert", name: "Image Editor: Invert", category: "image" },
  { id: "img-blur", name: "Image Editor: Blur", category: "image" },
  { id: "img-brightness", name: "Image Editor: Brightness", category: "image" },
  { id: "img-contrast", name: "Image Editor: Contrast", category: "image" },
  { id: "img-to-base64", name: "Image → Base64 (Download)", category: "image" },
  { id: "base64-to-img", name: "Base64 → Image (Load)", category: "image" },
  { id: "img-jpg-to-png", name: "JPG → PNG (Download)", category: "image" },
  { id: "img-png-to-jpg", name: "PNG → JPG (Download)", category: "image" },
  { id: "img-watermark", name: "Watermark (use text overlay soon)", category: "image" },
  { id: "img-info", name: "Image Info (size)", category: "image" },

  // ===== PDF TOOLS (3) =====
  { id: "pdf-to-word", name: "PDF → Word (DOCX)", category: "pdf" },
  { id: "pdf-to-ppt", name: "PDF → PPTX", category: "pdf" },
  { id: "pdf-to-excel", name: "PDF → Excel (XLSX)", category: "pdf" },

  // ===== DEV TOOLS (16) =====
  { id: "dev-json-format", name: "JSON Formatter", category: "dev" },
  { id: "dev-json-minify", name: "JSON Minifier", category: "dev" },
  { id: "dev-json-validate", name: "JSON Validator", category: "dev" },
  { id: "dev-b64-encode", name: "Base64 Encode", category: "dev" },
  { id: "dev-b64-decode", name: "Base64 Decode", category: "dev" },
  { id: "dev-url-encode", name: "URL Encode", category: "dev" },
  { id: "dev-url-decode", name: "URL Decode", category: "dev" },
  { id: "dev-html-escape", name: "HTML Escape", category: "dev" },
  { id: "dev-html-unescape", name: "HTML Unescape", category: "dev" },
  { id: "dev-css-beautify", name: "CSS Beautifier (simple)", category: "dev" },
  { id: "dev-js-beautify", name: "JS Beautifier (simple)", category: "dev" },
  { id: "dev-regex-test", name: "Regex Tester (simple)", category: "dev" },
  { id: "dev-uuid", name: "UUID Generator", category: "dev" },
  { id: "dev-random-color", name: "Random Color Generator", category: "dev" },
  { id: "dev-sha256", name: "SHA-256 Hash (demo)", category: "dev" },
  { id: "dev-lorem", name: "Lorem Ipsum Generator", category: "dev" },

  // ===== UTILITY TOOLS (30) =====
  { id: "util-password", name: "Random Password Generator", category: "util" },
  { id: "util-random-number", name: "Random Number Generator", category: "util" },
  { id: "util-coin", name: "Coin Toss Simulator", category: "util" },
  { id: "util-dice", name: "Dice Roller", category: "util" },
  { id: "util-age", name: "Age Calculator", category: "util" },
  { id: "util-date-diff", name: "Date Difference (Days)", category: "util" },
  { id: "util-epoch", name: "Epoch ↔ Human Time", category: "util" },
  { id: "util-stopwatch", name: "Stopwatch (info)", category: "util" },
  { id: "util-timer", name: "Countdown Timer (info)", category: "util" },
  { id: "util-unit-length", name: "Unit Converter – Length", category: "util" },
  { id: "util-unit-weight", name: "Unit Converter – Weight", category: "util" },
  { id: "util-unit-temp", name: "Unit Converter – Temperature", category: "util" },
  { id: "util-bmi", name: "BMI Calculator", category: "util" },
  { id: "util-tip", name: "Tip Calculator", category: "util" },
  { id: "util-emi", name: "Loan EMI Calculator", category: "util" },
  { id: "util-si", name: "Simple Interest Calculator", category: "util" },
  { id: "util-ci", name: "Compound Interest Calculator", category: "util" },
  { id: "util-percentage", name: "Percentage Calculator", category: "util" },
  { id: "util-discount", name: "Discount Calculator", category: "util" },
  { id: "util-notes", name: "Quick Notes (text)", category: "util" },
  { id: "util-todo", name: "Simple To-Do (text)", category: "util" },
  { id: "util-url-preview", name: "URL Short Preview (domain)", category: "util" },
  { id: "util-yt-thumb", name: "YouTube Thumbnail URL", category: "util" },
  { id: "util-emoji", name: "Random Emoji Picker", category: "util" },
  { id: "util-color-picker-helper", name: "Color Code Helper", category: "util" },
  { id: "util-day-of-week", name: "Day of Week Finder", category: "util" },
  { id: "util-prime-check", name: "Prime Number Checker", category: "util" },
  { id: "util-factorial", name: "Factorial Calculator", category: "util" },
  { id: "util-base-convert", name: "Number Base Converter", category: "util" },
  { id: "util-random-list-picker", name: "Random List Picker", category: "util" },
];

// ---------- DOM ELEMENTS ----------

const toolListEl = document.querySelector(".tool-list");
const searchInput = document.getElementById("searchBar");
const titleEl = document.querySelector(".selected-tool-title");
const inputEl = document.getElementById("userInput");
const outputEl = document.getElementById("toolOutput");
const infoEl = document.getElementById("resultInfo");
const runBtn = document.getElementById("runTool");
const imageToolBox = document.getElementById("imageToolBox");

// Welcome Box removed from here as it is now a modal
let currentTool = null;

// ---------- SIDEBAR RENDER ----------

function renderTools(list) {
  toolListEl.innerHTML = "";
  list.forEach((tool) => {
    const li = document.createElement("li");
    li.className = "tool-item";
    li.dataset.id = tool.id;

    li.innerHTML = `
      <div class="tool-name">${tool.name}</div>
      <div class="tool-tags">
        <span class="tool-tag ${tool.category}">${tool.category.toUpperCase()}</span>
      </div>
    `;

    li.addEventListener("click", () => {
      selectTool(tool.id);
    });

    toolListEl.appendChild(li);
  });
}

function selectTool(id) {
  currentTool = tools.find((t) => t.id === id);
  if (!currentTool) return;

  document.querySelectorAll(".tool-item").forEach((li) => {
    li.classList.toggle("active", li.dataset.id === id);
  });

  titleEl.textContent = currentTool.name;
  outputEl.value = "";
  infoEl.textContent = "";

  // Image toolbox show/hide
  if (currentTool.category === "image") {
    if (imageToolBox) imageToolBox.style.display = "block";
    infoEl.textContent = "Image tool active. Upload image below and use buttons to edit.";
  } else {
    if (imageToolBox) imageToolBox.style.display = "none";
  }
}

// initial render
renderTools(tools);

// ---------- SEARCH ----------

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase().trim();
    const filtered = tools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q)
    );
    renderTools(filtered);
    if (currentTool && !filtered.some((t) => t.id === currentTool.id)) {
      currentTool = null;
      titleEl.textContent = "Choose a tool";
      outputEl.value = "";
      infoEl.textContent = "";
      if (imageToolBox) imageToolBox.style.display = "none";
    }
  });
}

// ---------- MAIN RUN BUTTON ----------

runBtn.addEventListener("click", () => {
  if (!currentTool) {
    infoEl.textContent = "Please select a tool from the left.";
    return;
  }

  const inputValue = inputEl.value;

  let result = "";
  let info = "";

  switch (currentTool.category) {
    case "text":
      ({ result, info } = handleTextTool(currentTool.id, inputValue));
      break;
    case "dev":
      ({ result, info } = handleDevTool(currentTool.id, inputValue));
      break;
    case "util":
      ({ result, info } = handleUtilTool(currentTool.id, inputValue));
      break;
    case "pdf":
      ({ result, info } = handlePdfTool(currentTool.id));
      break;
    case "image":
      ({ result, info } = handleImageTool(currentTool.id, inputValue));
      break;
    default:
      result = "Tool not implemented yet.";
      info = "";
  }

  if (typeof result === "string") {
    outputEl.value = result;
  }
  if (info !== undefined && info !== null) {
    infoEl.textContent = info;
  }
});

// ---------- TEXT TOOL LOGIC ----------

function handleTextTool(id, text) {
  let result = "";
  let info = "";

  const lines = text.split("\n");

  switch (id) {
    case "text-word-count": {
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      result = String(words);
      info = "Total words.";
      break;
    }
    case "text-char-count":
      result = String(text.length);
      info = "Total characters.";
      break;

    case "text-line-count":
      result = String(text ? lines.length : 0);
      info = "Total lines.";
      break;

    case "text-sentence-count": {
      const sentences = text.split(/[.!?]+/).filter((s) => s.trim()).length;
      result = String(sentences);
      info = "Approximate sentence count.";
      break;
    }

    case "text-remove-extra-spaces":
      result = text.replace(/\s+/g, " ").trim();
      break;

    case "text-trim-lines":
      result = lines.map((l) => l.trim()).join("\n");
      break;

    case "text-remove-empty-lines":
      result = lines.filter((l) => l.trim() !== "").join("\n");
      break;

    case "text-remove-duplicate-lines": {
      const seen = new Set();
      result = lines
        .filter((l) => {
          const key = l;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        })
        .join("\n");
      break;
    }

    case "text-sort-az":
      result = [...lines].sort((a, b) => a.localeCompare(b)).join("\n");
      break;

    case "text-sort-za":
      result = [...lines].sort((a, b) => b.localeCompare(a)).join("\n");
      break;

    case "text-shuffle-lines":
      result = [...lines].sort(() => Math.random() - 0.5).join("\n");
      break;

    case "text-upper":
      result = text.toUpperCase();
      break;

    case "text-lower":
      result = text.toLowerCase();
      break;

    case "text-title":
      result = text.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
      break;

    case "text-sentence":
      result = text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
      break;

    case "text-toggle-case":
      result = text
        .split("")
        .map((ch) =>
          ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
        )
        .join("");
      break;

    case "text-reverse":
      result = text.split("").reverse().join("");
      break;

    case "text-reverse-lines":
      result = [...lines].reverse().join("\n");
      break;

    case "text-find-replace": {
      const parts = text.split("\n");
      if (parts.length < 3) {
        result = text;
        info = "Format: first line = find, second line = replace, rest = content.";
      } else {
        const find = parts[0];
        const replace = parts[1];
        const body = parts.slice(2).join("\n");
        result = body.split(find).join(replace);
      }
      break;
    }

    case "text-remove-punct":
      result = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
      break;

    case "text-extract-numbers": {
      const nums = text.match(/-?\d+(\.\d+)?/g) || [];
      result = nums.join("\n");
      info = `${nums.length} numbers found.`;
      break;
    }

    case "text-extract-emails": {
      const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g) || [];
      result = emails.join("\n");
      info = `${emails.length} emails found.`;
      break;
    }

    case "text-extract-urls": {
      const urls =
        text.match(/(https?:\/\/[^\s]+)/gi) || [];
      result = urls.join("\n");
      info = `${urls.length} URLs found.`;
      break;
    }

    case "text-extract-hashtags": {
      const tags = text.match(/#[\w]+/g) || [];
      result = tags.join(" ");
      info = `${tags.length} hashtags found.`;
      break;
    }

    case "text-slug-generator":
      result = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      break;

    case "text-hashtag-generator":
      result =
        "#" +
        text
          .toLowerCase()
          .trim()
          .replace(/[^\w\s]/g, "")
          .split(/\s+/)
          .join(" #");
      break;

    case "text-reading-time": {
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const minutes = Math.max(1, Math.round(words / 200));
      result = `${minutes} minute(s) approx.`;
      info = `${words} words at 200 wpm.`;
      break;
    }

    case "text-deduplicate": {
      const seenLines = new Set();
      result = lines
        .map((l) => l.trim())
        .filter((l) => {
          if (!l) return false;
          const low = l.toLowerCase();
          if (seenLines.has(low)) return false;
          seenLines.add(low);
          return true;
        })
        .join("\n");
      break;
    }

    case "text-prefix-lines": {
      const [prefix, ...rest] = lines;
      if (!rest.length) {
        result = text;
        info = "First line = prefix, rest = content.";
      } else {
        result = rest.map((l) => prefix + l).join("\n");
      }
      break;
    }

    case "text-suffix-lines": {
      const [suffix, ...rest2] = lines;
      if (!rest2.length) {
        result = text;
        info = "First line = suffix, rest = content.";
      } else {
        result = rest2.map((l) => l + suffix).join("\n");
      }
      break;
    }

    case "text-add-line-numbers":
      result = lines
        .map((l, i) => `${i + 1}. ${l}`)
        .join("\n");
      break;

    case "text-remove-line-numbers":
      result = lines
        .map((l) => l.replace(/^\s*\d+\.\s*/, ""))
        .join("\n");
      break;

    case "text-diff-simple": {
      const partsDiff = text.split(/\n\s*\n/);
      if (partsDiff.length < 2) {
        result = text;
        info = "Put text A, blank line, then text B.";
      } else {
        const aLines = partsDiff[0].split("\n");
        const bLines = partsDiff[1].split("\n");
        const max = Math.max(aLines.length, bLines.length);
        const out = [];
        for (let i = 0; i < max; i++) {
          const a = aLines[i] || "";
          const b = bLines[i] || "";
          if (a === b) out.push("  " + a);
          else {
            out.push("- " + a);
            out.push("+ " + b);
          }
        }
        result = out.join("\n");
      }
      break;
    }

    case "text-word-frequency": {
      const words = text
        .toLowerCase()
        .match(/\b[\w']+\b/g);
      if (!words) {
        result = "";
        info = "No words found.";
        break;
      }
      const freq = {};
      words.forEach((w) => {
        freq[w] = (freq[w] || 0) + 1;
      });
      const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
      result = sorted.map(([w, c]) => `${w}: ${c}`).join("\n");
      break;
    }

    case "text-to-binary":
      result = text
        .split("")
        .map((ch) => ch.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
      break;

    case "binary-to-text":
      result = text
        .trim()
        .split(/\s+/)
        .map((bin) => String.fromCharCode(parseInt(bin, 2) || 0))
        .join("");
      break;

    default:
      result = text;
      info = "Tool coming soon.";
  }

  return { result, info };
}

// ---------- DEV TOOLS LOGIC ----------

function handleDevTool(id, text) {
  let result = "";
  let info = "";

  try {
    switch (id) {
      case "dev-json-format":
        result = JSON.stringify(JSON.parse(text), null, 2);
        info = "JSON formatted.";
        break;

      case "dev-json-minify":
        result = JSON.stringify(JSON.parse(text));
        info = "JSON minified.";
        break;

      case "dev-json-validate":
        JSON.parse(text);
        result = "Valid JSON ✅";
        info = "";
        break;

      case "dev-b64-encode":
        result = btoa(text);
        info = "Base64 encoded.";
        break;

      case "dev-b64-decode":
        result = atob(text);
        info = "Base64 decoded.";
        break;

      case "dev-url-encode":
        result = encodeURIComponent(text);
        info = "URL encoded.";
        break;

      case "dev-url-decode":
        result = decodeURIComponent(text);
        info = "URL decoded.";
        break;

      case "dev-html-escape":
        result = text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
        info = "HTML escaped.";
        break;

      case "dev-html-unescape":
        result = text
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&amp;/g, "&");
        info = "HTML unescaped.";
        break;

      case "dev-css-beautify":
        result = text.replace(/;/g, ";\n").replace(/{/g, "{\n").replace(/}/g, "}\n");
        info = "Basic CSS beautify.";
        break;

      case "dev-js-beautify":
        result = text.replace(/;/g, ";\n");
        info = "Basic JS beautify.";
        break;

      case "dev-regex-test": {
        const parts = text.split("\n");
        if (parts.length < 2) {
          result = text;
          info = "First line = regex, rest = test text.";
        } else {
          const pattern = parts[0];
          const body = parts.slice(1).join("\n");
          const re = new RegExp(pattern, "g");
          const matches = body.match(re) || [];
          result = matches.join("\n");
          info = `${matches.length} matches.`;
        }
        break;
      }

      case "dev-uuid":
        result = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
        info = "Random UUID v4.";
        break;

      case "dev-random-color": {
        const hex = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
        result = hex;
        info = "Random HEX color.";
        break;
      }

      case "dev-sha256": {
        info =
          "SHA-256 demo only. For accurate hash, full Crypto API async implementation needed. Here using btoa(text) as a placeholder.";
        result = btoa(text);
        break;
      }

      case "dev-lorem": {
        const paraCount = parseInt(text.trim(), 10) || 1;
        const base =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut eros eu nunc pretium ultrices.";
        result = Array.from({ length: Math.min(paraCount, 10) }, () => base).join("\n\n");
        info = `${Math.min(paraCount, 10)} paragraph(s) generated.`;
        break;
      }

      default:
        result = text;
        info = "Dev tool coming soon.";
    }
  } catch (e) {
    result = "❌ Error: " + e.message;
    info = "";
  }

  return { result, info };
}

// ---------- UTILITY TOOLS LOGIC ----------

function handleUtilTool(id, text) {
  let result = "";
  let info = "";

  switch (id) {
    case "util-password": {
      const length = parseInt(text.trim(), 10) || 12;
      const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
      let pass = "";
      for (let i = 0; i < length; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result = pass;
      info = `Password length: ${length}`;
      break;
    }

    case "util-random-number": {
      const [a, b] = text.split(",").map((x) => parseFloat(x));
      const min = isNaN(a) ? 1 : a;
      const max = isNaN(b) ? 100 : b;
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      result = String(num);
      info = `Random between ${min} and ${max}`;
      break;
    }

    case "util-coin":
      result = Math.random() < 0.5 ? "HEADS" : "TAILS";
      info = "Coin toss result.";
      break;

    case "util-dice":
      result = String(Math.floor(Math.random() * 6) + 1);
      info = "Dice roll (1–6).";
      break;

    case "util-age": {
      const d = new Date(text.trim());
      if (isNaN(d.getTime())) {
        result = "";
        info = "Enter DOB as YYYY-MM-DD";
      } else {
        const today = new Date();
        let age = today.getFullYear() - d.getFullYear();
        const m = today.getMonth() - d.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < d.getDate())) age--;
        result = String(age);
        info = "Age in years.";
      }
      break;
    }

    case "util-date-diff": {
      const parts = text.split(",");
      if (parts.length < 2) {
        result = "";
        info = "Format: YYYY-MM-DD,YYYY-MM-DD";
      } else {
        const d1 = new Date(parts[0].trim());
        const d2 = new Date(parts[1].trim());
        if (isNaN(d1) || isNaN(d2)) {
          result = "";
          info = "Invalid dates.";
        } else {
          const diffMs = Math.abs(d2 - d1);
          const days = Math.round(diffMs / (1000 * 60 * 60 * 24));
          result = String(days);
          info = "Difference in days.";
        }
      }
      break;
    }

    case "util-epoch": {
      const trimmed = text.trim();
      if (!trimmed) {
        result = String(Math.floor(Date.now() / 1000));
        info = "Current epoch time (seconds).";
      } else if (/^\d+$/.test(trimmed)) {
        const ms = parseInt(trimmed, 10) * 1000;
        result = new Date(ms).toISOString();
        info = "Epoch → ISO date.";
      } else {
        const d = new Date(trimmed);
        if (isNaN(d)) {
          result = "";
          info = "Enter either epoch seconds or a valid date.";
        } else {
          result = String(Math.floor(d.getTime() / 1000));
          info = "Date → epoch seconds.";
        }
      }
      break;
    }

    case "util-unit-length": {
      const val = parseFloat(text.trim());
      if (isNaN(val)) {
        result = "";
        info = "Enter value in meters.";
      } else {
        result = `${val} m = ${(val * 100).toFixed(2)} cm = ${(val * 3.28084).toFixed(
          2
        )} ft`;
      }
      break;
    }

    case "util-unit-weight": {
      const v = parseFloat(text.trim());
      if (isNaN(v)) {
        result = "";
        info = "Enter value in kilograms.";
      } else {
        result = `${v} kg = ${(v * 1000).toFixed(2)} g = ${(v * 2.20462).toFixed(2)} lb`;
      }
      break;
    }

    case "util-unit-temp": {
      const t = parseFloat(text.trim());
      if (isNaN(t)) {
        result = "";
        info = "Enter temperature in °C.";
      } else {
        result = `${t} °C = ${(t * 9 / 5 + 32).toFixed(2)} °F = ${(t + 273.15).toFixed(
          2
        )} K`;
      }
      break;
    }

    case "util-bmi": {
      const parts = text.split(",");
      const w = parseFloat(parts[0]);
      const h = parseFloat(parts[1]);
      if (isNaN(w) || isNaN(h) || h === 0) {
        result = "";
        info = "Format: weight_kg,height_m (e.g. 70,1.75)";
      } else {
        const bmi = w / (h * h);
        result = bmi.toFixed(2);
        info = "BMI (kg/m²).";
      }
      break;
    }

    case "util-tip": {
      const partsTip = text.split(",");
      const bill = parseFloat(partsTip[0]);
      const tipPercent = parseFloat(partsTip[1] || "10");
      if (isNaN(bill)) {
        result = "";
        info = "Format: bill,tip% (e.g. 500,10)";
      } else {
        const tip = (bill * tipPercent) / 100;
        const total = bill + tip;
        result = `Tip: ${tip.toFixed(2)}\nTotal: ${total.toFixed(2)}`;
      }
      break;
    }

    case "util-emi": {
      const partsEmi = text.split(",");
      const P = parseFloat(partsEmi[0]);
      const rYear = parseFloat(partsEmi[1]);
      const nMonths = parseFloat(partsEmi[2]);
      if (isNaN(P) || isNaN(rYear) || isNaN(nMonths)) {
        result = "";
        info = "Format: principal,annualRate%,months (e.g. 100000,10,12)";
      } else {
        const r = rYear / 12 / 100;
        const emi = (P * r * Math.pow(1 + r, nMonths)) / (Math.pow(1 + r, nMonths) - 1);
        result = emi.toFixed(2);
        info = "Monthly EMI.";
      }
      break;
    }

    case "util-si": {
      const p = text.split(",");
      const P2 = parseFloat(p[0]);
      const R = parseFloat(p[1]);
      const T = parseFloat(p[2]);
      if (isNaN(P2) || isNaN(R) || isNaN(T)) {
        result = "";
        info = "Format: principal,rate%,years (e.g. 1000,5,2)";
      } else {
        const si = (P2 * R * T) / 100;
        result = si.toFixed(2);
        info = "Simple interest.";
      }
      break;
    }

    case "util-ci": {
      const p2 = text.split(",");
      const P3 = parseFloat(p2[0]);
      const r = parseFloat(p2[1]);
      const n = parseFloat(p2[2]);
      if (isNaN(P3) || isNaN(r) || isNaN(n)) {
        result = "";
        info = "Format: principal,rate%,years (e.g. 1000,5,2)";
      } else {
        const amt = P3 * Math.pow(1 + r / 100, n);
        const ci = amt - P3;
        result = `Amount: ${amt.toFixed(2)}\nCI: ${ci.toFixed(2)}`;
      }
      break;
    }

    case "util-percentage": {
      const p3 = text.split(",");
      const part = parseFloat(p3[0]);
      const whole = parseFloat(p3[1]);
      if (isNaN(part) || isNaN(whole) || whole === 0) {
        result = "";
        info = "Format: part,whole (e.g. 25,200)";
      } else {
        result = ((part / whole) * 100).toFixed(2) + "%";
      }
      break;
    }

    case "util-discount": {
      const p4 = text.split(",");
      const price = parseFloat(p4[0]);
      const disc = parseFloat(p4[1]);
      if (isNaN(price) || isNaN(disc)) {
        result = "";
        info = "Format: price,discount% (e.g. 999,20)";
      } else {
        const off = (price * disc) / 100;
        const finalPrice = price - off;
        result = `Discount: ${off.toFixed(2)}\nFinal: ${finalPrice.toFixed(2)}`;
      }
      break;
    }

    case "util-notes":
      result = text;
      info = "Simple notes pad. (Copy/save manually.)";
      break;

    case "util-todo": {
      const items = text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      result = items.map((l, i) => `[ ] ${i + 1}. ${l}`).join("\n");
      info = "Simple todo list format.";
      break;
    }

    case "util-url-preview": {
      const url = text.trim();
      try {
        const u = new URL(url);
        result = `Host: ${u.hostname}\nProtocol: ${u.protocol}\nPath: ${u.pathname}`;
        info = "Basic URL breakdown.";
      } catch {
        result = "";
        info = "Enter a valid URL (with http/https).";
      }
      break;
    }

    case "util-yt-thumb": {
      const url = text.trim();
      const m = url.match(/v=([a-zA-Z0-9_-]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      if (!m) {
        result = "";
        info = "Paste full YouTube URL.";
      } else {
        const id = m[1];
        const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        result = thumb;
        info = "Thumbnail URL generated.";
      }
      break;
    }

    case "util-emoji": {
      const emojis = ["😀", "😁", "😂", "🤣", "😎", "😍", "🤩", "🤯", "👍", "🔥", "⭐", "⚡"];
      result = emojis[Math.floor(Math.random() * emojis.length)];
      info = "Random emoji.";
      break;
    }

    case "util-color-picker-helper": {
      const val = text.trim() || "#2684ff";
      result = val;
      info = "Put a HEX color (e.g. #ff0000).";
      break;
    }

    case "util-day-of-week": {
      const d = new Date(text.trim());
      if (isNaN(d)) {
        result = "";
        info = "Enter date YYYY-MM-DD.";
      } else {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        result = days[d.getDay()];
        info = "";
      }
      break;
    }

    case "util-prime-check": {
      const n = parseInt(text.trim(), 10);
      if (isNaN(n)) {
        result = "";
        info = "Enter an integer.";
      } else {
        if (n < 2) {
          result = "Not prime.";
        } else {
          let isPrime = true;
          for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
              isPrime = false;
              break;
            }
          }
          result = isPrime ? "Prime ✅" : "Not prime ❌";
        }
      }
      break;
    }

    case "util-factorial": {
      let n = parseInt(text.trim(), 10);
      if (isNaN(n) || n < 0 || n > 20) {
        result = "";
        info = "Enter integer 0–20.";
      } else {
        let f = 1;
        for (let i = 2; i <= n; i++) f *= i;
        result = String(f);
      }
      break;
    }

    case "util-base-convert": {
      const partsBase = text.split(",");
      const value = (partsBase[0] || "").trim();
      const fromBase = parseInt(partsBase[1] || "10", 10);
      const toBase = parseInt(partsBase[2] || "2", 10);
      if (!value) {
        result = "";
        info = "Format: value,fromBase,toBase (e.g. 15,10,2)";
      } else {
        const num = parseInt(value, fromBase);
        if (isNaN(num)) {
          result = "";
          info = "Invalid number / base.";
        } else {
          result = num.toString(toBase);
        }
      }
      break;
    }

    case "util-random-list-picker": {
      const items2 = text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      if (!items2.length) {
        result = "";
        info = "Enter each option on new line.";
      } else {
        const pick = items2[Math.floor(Math.random() * items2.length)];
        result = pick;
        info = `${items2.length} options.`;
      }
      break;
    }

    case "util-stopwatch":
    case "util-timer":
      result =
        "Ye tool info-only hai abhi. Real stopwatch/timer ke liye UI+setInterval future update me aayega.";
      info = "";
      break;

    default:
      result = text;
      info = "Utility tool coming soon.";
  }

  return { result, info };
}

// ---------- PDF TOOLS (BACKEND) ----------

async function uploadPdfAndDownload(endpoint, infoElement) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/pdf";

  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;

    infoElement.textContent = "⏳ Uploading & converting...";

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://gttools-api.onrender.com" + endpoint, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        infoElement.textContent = "❌ Conversion failed (server error).";
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      if (endpoint === "/pdf-to-word") a.download = "converted.docx";
      else if (endpoint === "/pdf-to-ppt") a.download = "converted.pptx";
      else if (endpoint === "/pdf-to-excel") a.download = "converted.xlsx";
      else a.download = "download.bin";

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      infoElement.textContent = "✅ Done! File downloaded.";
    } catch (err) {
      console.error(err);
      infoElement.textContent = "❌ Network error. Please try again.";
    }
  };

  input.click();
}

function handlePdfTool(id) {
  let result = "";
  let info = "";

  if (id === "pdf-to-word") {
    uploadPdfAndDownload("/pdf-to-word", infoEl);
    result = "PDF → Word conversion started. File download will begin after processing.";
  } else if (id === "pdf-to-ppt") {
    uploadPdfAndDownload("/pdf-to-ppt", infoEl);
    result = "PDF → PPT conversion started. File download will begin after processing.";
  } else if (id === "pdf-to-excel") {
    uploadPdfAndDownload("/pdf-to-excel", infoEl);
    result = "PDF → Excel conversion started. File download will begin after processing.";
  } else {
    result = "PDF tool not implemented yet.";
  }

  return { result, info };
}

// ---------- IMAGE TOOL ENGINE ----------

let canvas = document.getElementById("imageCanvas");
let ctx = canvas ? canvas.getContext("2d") : null;
let originalImage = null;
let currentAngle = 0;
let flipX = 1;
let flipY = 1;
let brightnessVal = 100;
let contrastVal = 100;
let blurVal = 0;

const imgInput = document.getElementById("imgInput");

if (imgInput && canvas && ctx) {
  imgInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        originalImage = img;
        resetImageFilters();
        drawImage();
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
}

function resetImageFilters() {
  currentAngle = 0;
  flipX = 1;
  flipY = 1;
  brightnessVal = 100;
  contrastVal = 100;
  blurVal = 0;
}

function drawImage() {
  if (!ctx || !originalImage) return;

  ctx.filter = `brightness(${brightnessVal}%) contrast(${contrastVal}%) blur(${blurVal}px)`;
  canvas.width = originalImage.width;
  canvas.height = originalImage.height;

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(flipX, flipY);
  ctx.rotate((currentAngle * Math.PI) / 180);

  ctx.drawImage(originalImage, -originalImage.width / 2, -originalImage.height / 2);

  ctx.restore();
}

function applyFilter(type) {
  if (!originalImage) {
    alert("Pehle ek image upload karo.");
    return;
  }

  switch (type) {
    case "rotate":
      currentAngle += 90;
      break;
    case "flipH":
      flipX *= -1;
      break;
    case "flipV":
      flipY *= -1;
      break;
    case "grayscale":
      ctx.filter = "grayscale(100%)";
      ctx.drawImage(originalImage, 0, 0);
      resetImageFilters();
      break;
    case "invert":
      ctx.filter = "invert(100%)";
      ctx.drawImage(originalImage, 0, 0);
      resetImageFilters();
      break;
    case "blur":
      blurVal += 2;
      break;
    case "brightness":
      brightnessVal += 10;
      break;
    case "contrast":
      contrastVal += 10;
      break;
  }
  drawImage();
}

function resetImageFiltersWrapper() {
  resetImageFilters();
  drawImage();
}

// global for button onclick
window.applyFilter = applyFilter;
window.resetImageFilters = resetImageFiltersWrapper;

function downloadImage() {
  if (!canvas || !originalImage) {
    alert("Pehle ek image upload karo.");
    return;
  }
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

window.downloadImage = downloadImage;

// image tools text output
function handleImageTool(id, text) {
  let result =
    "Image tool active. Neeche image upload UI use karo. Run Tool text box ke liye optional hai.";
  let info = `Tool: ${id}`;
  return { result, info };
}


// ====================================
// NEW MODAL POPUP LOGIC ADDED BELOW
// ====================================

const welcomeOverlay = document.getElementById("welcomeOverlay");
const closePopupBtn = document.getElementById("closePopupBtn");

if (closePopupBtn && welcomeOverlay) {
  closePopupBtn.addEventListener("click", () => {
    welcomeOverlay.style.display = "none";
    
    // Optional: Agar tum chahte ho ki user ko ye popup 
    // agli baar refresh karne par NA dikhe, to ye line uncomment kar dena:
    // localStorage.setItem("gttools_welcome_seen", "true");
  });
}

// (Optional) Check local storage on load if you want to remember user choice
/*
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("gttools_welcome_seen")) {
        welcomeOverlay.style.display = "none";
    }
});
*/
