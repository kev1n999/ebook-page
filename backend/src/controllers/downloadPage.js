const path = require("path");

async function downloadPage(req, res) {
    res.sendFile(path.join(__dirname, "../../../frontend", "download.html"));
}

module.exports = downloadPage;