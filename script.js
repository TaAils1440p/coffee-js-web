function convertFake() {
      const js = document.getElementById("jsInput").value;

      const coffee = js
        .replace(/function\s*\((.*?)\)\s*\{/g, '$1 ->')
        .replace(/console\.log/g, 'console.log')
        .replace(/var\s+|let\s+|const\s+/g, '')
        .replace(/;/g, '')
        .replace(/\{\s*/g, '')
        .replace(/\s*\}/g, '')
        .trim();

      const output = document.getElementById("output");
      output.textContent = coffee || "(vide)";
      Prism.highlightElement(output);
    }