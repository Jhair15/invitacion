let fireworksIntervalId = null;

function createFireworkOnConfirmation() {
  if (window.location.hash === "#confirmation" && fireworksIntervalId === null) {
    fireworksIntervalId = setInterval(createFirework, 1000);
  } else if (window.location.hash !== "#confirmation" && fireworksIntervalId !== null) {
    clearInterval(fireworksIntervalId);
    fireworksIntervalId = null;
  }
}

  
  // Función que muestra las páginas de confirmación
  function showConfirmationPages() {
    document.getElementById("pagina2").style.display = "none";
    createFireworkOnConfirmation(); // Mostramos los fuegos artificiales solo en las páginas de confirmación
  }
  
  // Detectar cambios en el fragmento de URL (hashchange)
  window.addEventListener("hashchange", function () {
    const hash = window.location.hash;
    if (hash === "#food-choice") {
      showFoodChoicePages();
    } else if (hash === "#confirmation") {
      showConfirmationPages();
    } else {
      // Si el fragmento no coincide con ninguna página, mostrar la página 1
      document.getElementById("pagina1").style.display = "flex";
    }
    createFireworkOnConfirmation();
  });
  

document.addEventListener("DOMContentLoaded", function () {
    // Función que agrega los eventos onclick a los botones
    function addEventsToButtons() {
      document.getElementById('boton1').onclick = function() {
        window.alert("¡Genial elección! Ahora que has elegido COMIDITA PA COMPRAR, escribeme al WhatsApp, baby ❤️");
        document.getElementById("pagina2").style.display = "none";
        document.getElementById("pagina3.1").style.display = "flex";
        createFirework();
      };
      document.getElementById('boton2').onclick = function() {
        window.alert("¡Excelente elección! Ahora que has elegido COMIDITA PREPARADA, escribeme al WhatsApp, baby ❤️");
        document.getElementById("pagina2").style.display = "none";
        document.getElementById("pagina3.2").style.display = "flex";
        createFirework();
      };
    }
  
    // Función que muestra las páginas de elección de comida
    function showFoodChoicePages() {
      document.getElementById("pagina1").style.display = "none";
      document.getElementById("pagina2").style.display = "flex";
    }
  
    // Función que muestra las páginas de confirmación
    function showConfirmationPages() {
      document.getElementById("pagina3.1").style.display = "none";
      document.getElementById("pagina3.2").style.display = "none";
    }
  
    // Añadir eventos a los botones
    addEventsToButtons();
  
    // Detectar cambios en el fragmento de URL (hashchange)
    window.addEventListener("hashchange", function () {
      const hash = window.location.hash;
      if (hash === "#food-choice") {
        showFoodChoicePages();
      } else if (hash === "#confirmation") {
        showConfirmationPages();
      } else {
        // Si el fragmento no coincide con ninguna página, mostrar la página 1
        document.getElementById("pagina1").style.display = "flex";
      }
    });
    createFireworkOnConfirmation();
  });
  

function createFirework() {
    const numberOfParticles = 3; // Número de puntos que se crearán en cada fuego artificial
  
    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("firework");
  
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
  
      const x = Math.random() * screenWidth;
      const y = Math.random() * screenHeight;
  
      const color = getRandomColor();
      particle.style.backgroundColor = color;
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      particle.style.transform = "translate(-50%, -50%)"; // Ajustamos el punto al centro del círculo
  
      document.body.appendChild(particle);
  
      animateParticle(particle, x, y, color);
    }
}  

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animateParticle(particle, x, y, color) {
    const radius = 10; // Tamaño inicial del punto
    const maxRadius = Math.min(window.innerWidth, window.innerHeight) / 4; // Tamaño máximo al que se expandirá el punto (ajustado al tamaño de la pantalla)
    const duration = Math.random() * 1000 + 800;
    
    let startTime = null;
    
    function updateParticle(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        
        if (progress >= 1) {
            particle.style.display = "none";
            return;
        }
        
        const currentRadius = radius + (maxRadius - radius) * progress;
        particle.style.width = currentRadius + "px";
        particle.style.height = currentRadius + "px";
        particle.style.borderRadius = currentRadius + "px";
        
        requestAnimationFrame(updateParticle);
    }
    
    requestAnimationFrame(updateParticle);
}
