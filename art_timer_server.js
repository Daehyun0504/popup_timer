const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 제공
app.use(express.static(path.join(__dirname)));

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
