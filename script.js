 1 // =============================
 2 // GTTOOLS – FINAL script.js (FIXED)
 3 // =============================
 4 
 5 // ---------- TOOL DEFINITIONS ----------
 6 const tools = [
 7   ... (tumhara pura tools array same rakha hai)
 8 ];
 9 
10 // ---------- DOM ELEMENTS ----------
11 const toolListEl = document.querySelector(".tool-list");
12 const searchInput = document.getElementById("searchBar");
13 const titleEl = document.querySelector(".selected-tool-title");
14 const inputEl = document.getElementById("userInput");
15 const outputEl = document.getElementById("toolOutput");
16 const infoEl = document.getElementById("resultInfo");
17 const runBtn = document.getElementById("runTool");
18 const imageToolBox = document.getElementById("imageToolBox");
19 const welcomeBox = document.getElementById("welcomeBox");
20 
21 let currentTool = null;
22 
23 // ---------- SIDEBAR RENDER ----------
24 function renderTools(list) {
25   toolListEl.innerHTML = "";
26   list.forEach((tool) => {
27      const li = document.createElement("li");
28      li.className = "tool-item";
29      li.dataset.id = tool.id;
30      li.innerHTML = `
31        <div class="tool-name">${tool.name}</div>
32        <div class="tool-tags">
33           <span class="tool-tag ${tool.category}">${tool.category.toUpperCase()}</span>
34        </div>`;
35      li.addEventListener("click", () => selectTool(tool.id));
36      toolListEl.appendChild(li);
37   });
38 }
39 
40 renderTools(tools);
41 
42 // ---------- TOOL SELECT ----------
43 function selectTool(id) {
44   currentTool = tools.find((t) => t.id === id);
45   if (!currentTool) return;
46 
47   // ========== WELCOME BOX FIX ==========
48   // ❌ Old (buggy):
49   // welcomeBox.style.display = "none";
50   //
51   // ✔ New (perfect collapse fix):
52   if (welcomeBox) {
53       welcomeBox.classList.add("hidden");
54   }
55   // =====================================
56 
57   document.querySelectorAll(".tool-item").forEach((li) =>
58       li.classList.toggle("active", li.dataset.id === id)
59   );
60 
61   titleEl.textContent = currentTool.name;
62   outputEl.value = "";
63   infoEl.textContent = "";
64 
65   if (currentTool.category === "image") {
66       imageToolBox.style.display = "block";
67       infoEl.textContent = "Image tool active. Upload image below.";
68   } else {
69       imageToolBox.style.display = "none";
70   }
71 }
72 
73 // ---------- SEARCH ----------
74 searchInput.addEventListener("input", () => {
75   const q = searchInput.value.toLowerCase().trim();
76   const filtered = tools.filter(
77      (t) => t.name.toLowerCase().includes(q) ||
78             t.category.toLowerCase().includes(q) ||
79             t.id.toLowerCase().includes(q)
80   );
81   renderTools(filtered);
82 });
83 
84 // ---------- RUN TOOL ----------
85 runBtn.addEventListener("click", () => {
86   if (!currentTool) {
87      infoEl.textContent = "Please select a tool.";
88      return;
89   }
90 
91   const text = inputEl.value;
92   let result = "";
93   let info = "";
94 
95   switch (currentTool.category) {
96      case "text": ({ result, info } = handleTextTool(currentTool.id, text)); break;
97      case "dev":  ({ result, info } = handleDevTool(currentTool.id, text)); break;
98      case "util": ({ result, info } = handleUtilTool(currentTool.id, text)); break;
99      case "pdf":  ({ result, info } = handlePdfTool(currentTool.id)); break;
100     case "image":({ result, info } = handleImageTool(currentTool.id, text)); break;
101   }
102 
103   outputEl.value = result;
104   infoEl.textContent = info;
105 });
106 
107 // ---------- ALL YOUR EXISTING TOOL HANDLERS REMAIN SAME ----------
108 
109 ... (your entire text tools untouched)
110 ... (your entire dev tools untouched)
111 ... (your util tools untouched)
112 ... (your PDF tools untouched)
113 ... (your image tools untouched)
114 
115 // END
