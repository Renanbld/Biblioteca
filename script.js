
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById('animated-name');
    const textoOriginal = titulo.innerText;
    
    // Transforma o texto em um array de caracteres
    const letras = textoOriginal.split('');

    // Limpa o H1 para reinserir os spans
    titulo.innerHTML = '';

    letras.forEach((letra, index) => {
        const span = document.createElement('span');
        
        // Se for um espaço vazio, usamos um caractere de espaço especial (HTML entity)
        span.textContent = letra === ' ' ? '\u00A0' : letra;
        
        // Aplica o atraso (delay) baseado na posição da letra no array
        // Multiplicamos por 0.1s para criar o efeito sequencial
        span.style.animationDelay = `${index * 0.1}s`;
        
        titulo.appendChild(span);
    });
});



