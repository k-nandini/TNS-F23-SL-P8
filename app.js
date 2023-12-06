const express = require('express');
const app = express();
const path = require('path');
const colorConvert = require('color-convert');

const calculateComplementary = (hex) => {
    let [r, g, b] = colorConvert.hex.rgb(hex);
    r = (255 - r).toString(16).padStart(2, '0');
    g = (255 - g).toString(16).padStart(2, '0');
    b = (255 - b).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
};

const calculateAnalogous = (hex) => {
    let hsl = colorConvert.hex.hsl(hex);
    let analogous1 = [(hsl[0] + 30) % 360, hsl[1], hsl[2]];
    let analogous2 = [(hsl[0] + 330) % 360, hsl[1], hsl[2]];
    return [colorConvert.hsl.hex(analogous1), colorConvert.hsl.hex(analogous2)];
};

const calculateTriadic = (hex) => {
    let hsl = colorConvert.hex.hsl(hex);
    let triadic1 = [(hsl[0] + 120) % 360, hsl[1], hsl[2]];
    let triadic2 = [(hsl[0] + 240) % 360, hsl[1], hsl[2]];
    return [colorConvert.hsl.hex(triadic1), colorConvert.hsl.hex(triadic2)];
};

app.use('/static', express.static('static'));

app.get('/api/color/:hex', (req, res) => {
    const hex = req.params.hex;
    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
        return res.status(400).send('Invalid HEX color format');
    }

    const complementary = calculateComplementary(hex);
    const [analogous1, analogous2] = calculateAnalogous(hex);
    const [triadic1, triadic2] = calculateTriadic(hex);

    res.json({
        original: `#${hex}`,
        complementary,
        analogous: [`#${analogous1}`, `#${analogous2}`],
        triadic: [`#${triadic1}`, `#${triadic2}`]
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/home.html'));
});

app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/app.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'templates/404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
