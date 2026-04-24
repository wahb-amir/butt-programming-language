function runButt(code) {
  code = code
    .replace(/\bbutt\b/g, "let")
    .replace(/\bclap\b/g, "console.log")
    .replace(/\bcheek\b/g, "function")
    .replace(/\bdrop\b/g, "return")
    .replace(/\bvibe\b/g, "if")
    .replace(/\bnah\b/g, "else")
    .replace(/\bwiggle\b/g, "for");

  try {
    eval(code);
  } catch (err) {
    console.log("💀 Butt Runtime Error:", err.message);
  }
}

module.exports = { runButt };