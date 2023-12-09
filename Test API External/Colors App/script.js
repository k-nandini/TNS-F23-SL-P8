function getColorInfo() {
    var color = document.getElementById('colorInput').value;
    fetch(`https://color-picker-26p7.onrender.com/api/color/${color.substring(1)}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('colorResults').innerHTML = `
                <p>Original Color: <span style="color: ${data.original};">${data.original}</span></p>
                <p>Complementary Color: <span style="color: ${data.complementary};">${data.complementary}</span></p>
                <p>Analogous Colors: <span style="color: ${data.analogous[0]};">${data.analogous[0]}</span>, <span style="color: ${data.analogous[1]};">${data.analogous[1]}</span></p>
                <p>Triadic Colors: <span style="color: ${data.triadic[0]};">${data.triadic[0]}</span>, <span style="color: ${data.triadic[1]};">${data.triadic[1]}</span></p>
            `;
        })
        .catch(error => console.error('Error:', error));
}