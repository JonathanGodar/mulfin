"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = express_1.default();
app.get('/hello', (req, res) => {
    res.send('hello world');
});
app.listen(3000, () => {
    console.log(`listening on http://localhost:3000`);
});
//# sourceMappingURL=main.js.map