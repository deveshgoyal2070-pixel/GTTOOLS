// =========================
// GTTOOLS - FINAL SCRIPT
// =========================

// All Tools List
const tools = [
  // ---------------------- TEXT TOOLS ----------------------
  { id: "word-counter", name: "Word Counter", category: "text" },
  { id: "char-counter", name: "Character Counter", category: "text" },
  { id: "remove-spaces", name: "Remove Extra Spaces", category: "text" },
  { id: "remove-lines", name: "Remove Empty Lines", category: "text" },
  { id: "sort-az", name: "Sort A → Z", category: "text" },
  { id: "sort-za", name: "Sort Z → A", category: "text" },
  { id: "uppercase", name: "UPPERCASE", category: "text" },
  { id: "lowercase", name: "lowercase", category: "text" },
  { id: "titlecase", name: "Title Case", category: "text" },
  { id: "sentencecase", name: "Sentence Case", category: "text" },
  { id: "reverse-text", name: "Reverse Text", category: "text" },

  // ---------------------- IMAGE TOOLS ----------------------
  { id: "img-resize", name: "Resize Image", category: "image" },
  { id: "img-rotate", name: "Rotate Image", category: "image" },
  { id: "img-flip", name: "Flip Image", category: "image" },
  { id: "img-grayscale", name: "Grayscale", category: "image" },
  { id: "img-invert", name: "Invert Colors", category: "image" },
  { id: "img-blur", name: "Blur Image", category: "image" },

  // ---------------------- PDF TOOLS (LIVE BACKEND) ----------------------
  { id: "pdf-to-word", name: "PDF → Word (DOCX)", category: "pdf" },
  { id: "pdf-to-ppt", name: "PDF → PPT", category: "pdf" },
  { id: "pdf-to-excel", name: "PDF → Excel", category: "pdf" },

  // ---------------------- DEV TOOLS ----------------------
  { id: "json-format", name: "JSON Formatter", category: "dev" },
  { id: "json-minify", name: "JSON Minifier", category: "dev" },
  { id: "base64-encode", name: "Base64 Encode", category: "dev" },
  { id: "base64-decode", name: "Base64 Decode", category: "dev" },
];

// DOM Elements
const toolList = document.querySelector(".tool-list");
const outputArea = document.getElementById("toolOutput");
const infoEl = document.getElementById("resultInfo");

// ========= Populate Sidebar ==========

function loadTools(list = tools) {
  toolList.innerHTML = "";
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

    li.onclick = () => loadTool(tool);
    toolList.appendChild(li);
  });
}

loadTools();

// ========= Show Selected Tool Output Section ==========

function loadTool(tool) {
  document.querySelector(".selected-tool-title").textContent = tool.name;

  outputArea.value = "";
  infoEl.textContent = "";

  document.querySelectorAll(".tool-item").forEach((li) => li.classList.remove("active"));
  document.querySelector(`[data-id="${tool.id}"]`).classList.add("active");

  document.getElementById("runTool").onclick = () => runToolAction(tool);
}

// ========= MAIN TOOL ACTION HANDLER ==========

function runToolAction(tool) {
  const value = document.getElementById("userInput").value;

  if (tool.category === "text") {
    const { result, info } = runTextAction(tool.id, value);
    outputArea.value = result;
    infoEl.textContent = info;
  }

  if (tool.category === "dev") {
    const { result, info } = runDevAction(tool.id, value);
    outputArea.value = result;
    infoEl.textContent = info;
  }

  if (tool.category === "pdf") {
    const { result } = runPdfAction(tool);
    outputArea.value = result;
  }

  if (tool.category === "image") {
    infoEl.textContent = "Image tools UI coming soon!";
  }
}

// ========= TEXT TOOL LOGIC =========

function runTextAction(id, text) {
  switch (id) {
    case "word-counter":
      return { result: text.trim().split(/\s+/).length + " words", info: "" };

    case "char-counter":
      return { result: text.length + " characters", info: "" };

    case "remove-spaces":
      return { result: text.replace(/\s+/g, " ").trim(), info: "" };

    case "remove-lines":
      return { result: text.replace(/^\s*[\r\n]/gm, ""), info: "" };

    case "sort-az":
      return { result: text.split("\n").sort().join("\n"), info: "" };

    case "sort-za":
      return { result: text.split("\n").sort().reverse().join("\n"), info: "" };

    case "uppercase":
      return { result: text.toUpperCase(), info: "" };

    case "lowercase":
      return { result: text.toLowerCase(), info: "" };

    case "titlecase":
      return {
        result: text.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()),
        info: "",
      };

    case "sentencecase":
      return {
        result: text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
        info: "",
      };

    case "reverse-text":
      return { result: text.split("").reverse().join(""), info: "" };

    default:
      return { result: "", info: "" };
  }
}

// ========= DEV TOOLS LOGIC =========

function runDevAction(id, text) {
  try {
    switch (id) {
      case "json-format":
        return { result: JSON.stringify(JSON.parse(text), null, 2), info: "Formatted JSON" };

      case "json-minify":
        return { result: JSON.stringify(JSON.parse(text)), info: "Minified JSON" };

      case "base64-encode":
        return { result: btoa(text), info: "Encoded" };

      case "base64-decode":
        return { result: atob(text), info: "Decoded" };

      default:
        return { result: "Tool coming soon!", info: "" };
    }
  } catch (error) {
    return { result: "ERROR: Invalid Input", info: "" };
  }
}

// ========== PDF BACKEND INTEGRATION (LIVE) =========

async function uploadPdfAndDownload(endpoint, infoEl) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/pdf";

  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;

    infoEl.textContent = "⏳ Uploading & converting...";

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://gttools-api.onrender.com" + endpoint, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        infoEl.textContent = "❌ Conversion failed!";
        return;
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      if (endpoint === "/pdf-to-word") a.download = "converted.docx";
      if (endpoint === "/pdf-to-ppt") a.download = "converted.pptx";
      if (endpoint === "/pdf-to-excel") a.download = "converted.xlsx";

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      infoEl.textContent = "✅ Done! File downloaded.";
    } catch (err) {
      console.error(err);
      infoEl.textContent = "❌ Network error.";
    }
  };

  input.click();
}

function runPdfAction(tool) {
  if (tool.id === "pdf-to-word") {
    uploadPdfAndDownload("/pdf-to-word", infoEl);
    return { result: "Converting PDF → Word...", info: "" };
  }
  if (tool.id === "pdf-to-ppt") {
    uploadPdfAndDownload("/pdf-to-ppt", infoEl);
    return { result: "Converting PDF → PPT...", info: "" };
  }
  if (tool.id === "pdf-to-excel") {
    uploadPdfAndDownload("/pdf-to-excel", infoEl);
    return { result: "Converting PDF → Excel...", info: "" };
  }

  return { result: "Unsupported PDF Tool", info: "" };
}
