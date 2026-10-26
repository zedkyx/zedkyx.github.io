# Paper resource page

Standalone static page at `/papers/nodal-measure/`. No build step or JavaScript required.

- `index.html`: content, author information and manuscript result tables.
- `style.css`: responsive layout using the existing site's navy/gold palette.
- `assets/physics-attention.png`: rendered from the manuscript's existing mechanism figure.
- `assets/nodal-measures.png`: rendered from the manuscript's ES/IA comparison figure (`q_measure_quad.pdf`).

The current website repository contains a Next.js static export rather than its source. The English and Chinese About, Projects and CV pages include a Paper / 论文 navigation item in their HTML and route payloads. `site-navigation.js` ensures this standalone page opens through a full document navigation, outside the Next.js route tree. When rebuilding from the original site source, carry over this navigation item and preserve the paper directory; otherwise a new static export may overwrite these integration changes.

The GitHub code link is active. Data, checkpoint and paper download links must only be added once their release locations are confirmed. No data or model files are included in this page.

Content source: `aigh/paper/nmi/main_en.tex`, inspected 2026-10-26. Results reproduce the current manuscript's area-weighted tables (three seeds, 5,000 epochs). Do not label this work as accepted or published without a confirmed publication record.

Local preview from the repository root: `python3 -m http.server 8000`, then open `http://localhost:8000/papers/nodal-measure/`.
