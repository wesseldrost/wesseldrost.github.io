document.addEventListener('DOMContentLoaded', function() {
    const menuHTML = `
        <header>
            <h1>Welkom</h1>
            <div class="menu-toggle" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav id="menu">
                <a href="index.html">Home</a>
                <a href="kleuren.html">Kleuren</a>
                <a href="binairstelsel.html">Binaire Stelsel</a>
                <a href="compressie.html">Compressietechnieken</a>
                <a href="computer.html">Werking van de Computer</a>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('show');
    }
});
