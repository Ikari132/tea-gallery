// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root{--brewing-duration:1s;--filling-duration:5s}.glass.svelte-3w3d5f .svelte-3w3d5f,.glass.svelte-3w3d5f .svelte-3w3d5f:after,.glass.svelte-3w3d5f .svelte-3w3d5f:before{box-sizing:border-box;outline:none}.glass.svelte-3w3d5f.svelte-3w3d5f{font:14px/1 Open Sans,helvetica,sans-serif;-webkit-font-smoothing:antialiased;position:relative;border-radius:50%}.box.svelte-3w3d5f.svelte-3w3d5f,.glass.svelte-3w3d5f.svelte-3w3d5f{background:#020438;width:280px;height:280px}.box.svelte-3w3d5f.svelte-3w3d5f{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:100%;overflow:hidden}.box.filling.svelte-3w3d5f .water.svelte-3w3d5f{-webkit-animation:svelte-3w3d5f-filling var(--filling-duration) ease-out forwards;animation:svelte-3w3d5f-filling var(--filling-duration) ease-out forwards}.box.draining.svelte-3w3d5f .water.svelte-3w3d5f{background-color:maroon;-webkit-animation:svelte-3w3d5f-draining var(--filling-duration) ease-out forwards;animation:svelte-3w3d5f-draining var(--filling-duration) ease-out forwards}.box.draining.svelte-3w3d5f .water_wave_front.svelte-3w3d5f{fill:maroon}.box.brewing.svelte-3w3d5f.svelte-3w3d5f{background:#4d6de3;-webkit-animation:svelte-3w3d5f-brewing var(--brewing-duration) ease-out forwards;animation:svelte-3w3d5f-brewing var(--brewing-duration) ease-out forwards}.box.svelte-3w3d5f .water.svelte-3w3d5f{position:absolute;left:0;top:30px;z-index:2;width:100%;height:100%;transform:translateY(100%);background:#4d6de3;transition:all .3s}.box.svelte-3w3d5f .water_wave.svelte-3w3d5f{width:200%;position:absolute;bottom:100%}.box.svelte-3w3d5f .water_wave_back.svelte-3w3d5f{right:0;fill:#c7eeff;-webkit-animation:svelte-3w3d5f-wave-back 1.4s linear infinite;animation:svelte-3w3d5f-wave-back 1.4s linear infinite}.box.svelte-3w3d5f .water_wave_front.svelte-3w3d5f{left:0;fill:#4d6de3;margin-bottom:-1px;-webkit-animation:svelte-3w3d5f-wave-front .7s linear infinite;animation:svelte-3w3d5f-wave-front .7s linear infinite}@-webkit-keyframes svelte-3w3d5f-brewing{0%{background-color:#4d6de3}to{background-color:maroon}}@keyframes svelte-3w3d5f-brewing{0%{background-color:#4d6de3}to{background-color:maroon}}@-webkit-keyframes svelte-3w3d5f-filling{0%{top:0}to{top:-280px}}@keyframes svelte-3w3d5f-filling{0%{top:0}to{top:-280px}}@-webkit-keyframes svelte-3w3d5f-draining{0%{top:-280px}to{top:30px}}@keyframes svelte-3w3d5f-draining{0%{top:-280px}to{top:30px}}@-webkit-keyframes svelte-3w3d5f-wave-front{to{transform:translate(-50%)}}@keyframes svelte-3w3d5f-wave-front{to{transform:translate(-50%)}}@-webkit-keyframes svelte-3w3d5f-wave-back{to{transform:translate(50%)}}@keyframes svelte-3w3d5f-wave-back{to{transform:translate(50%)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}