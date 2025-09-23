// src/core/services/sycamore/sycamore-wrapper.js

// Cria uma Promise para carregar o script e garantir que ele esteja disponível
const SycamorePromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');

    // Usa 'new URL' para obter o caminho correto, que funciona com o Vite
    script.src = new URL('./sycamore.js', import.meta.url).href;

    script.onload = () => {
        // Quando o script carrega, a classe Sycamore é definida no window.
        // Resolve a Promise com a classe para que ela possa ser usada.
        if (window.Sycamore) {
            resolve(window.Sycamore);
        } else {
            reject(new Error('Sycamore class not found after script load.'));
        }
    };
    script.onerror = (e) => {
        console.error('Falha ao carregar sycamore.js', e);
        reject(e);
    };

    document.head.appendChild(script);
});

export default SycamorePromise;

// // src/core/services/sycamore/sycamore-wrapper.js
// let Sycamore;

// // A Promise para carregar o script e resolver com a classe Sycamore
// const loadSycamore = new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = './sycamore.js';
//     script.onload = () => {
//         // Quando o script carrega, a classe Sycamore é definida no window
//         // Resolve a Promise com a classe
//         resolve(window.Sycamore);
//     };
//     script.onerror = reject;
//     document.head.appendChild(script);
// });

// export default loadSycamore;