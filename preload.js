// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (let type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
  let output = `
  <h2>App version</h2>
    <ul class="list-group">
      <li class="list-group-item">chrome :${process.versions.chrome}</li>
      <li class="list-group-item">node :${process.versions.node}</li>
      <li class="list-group-item">electron:${process.versions.electron}</li>
      </ul>
      <h2>System Specs</h2>
    <ul class="list-group">
      <li class="list-group-item">SYSTEM architecture :${process.arch}</li>
      <li class="list-group-item">processor  :${
        process.env.PROCESSOR_IDENTIFIER
      }</li>
      <li class="list-group-item">printer:${process.env.PRINTER}</li>
      </ul>
      <h2>System Memory</h2>
    <ul class="list-group">
      <li class="list-group-item">Total :${
        process.getSystemMemoryInfo().total
      }</li>
      <li class="list-group-item">Free  :${
        process.getSystemMemoryInfo().free
      }</li>
      <li class="list-group-item">Swap Total:${
        process.getSystemMemoryInfo().swapTotal
      }</li>
      <li class="list-group-item">Swap Free:${
        process.getSystemMemoryInfo().swapFree
      }</li>
      </ul>
    `;
  document.getElementById('output').innerHTML = output;
  console.log(process);
});
