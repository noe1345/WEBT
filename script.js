const playersData = {
    "CRISTIANO RONALDO": {
        name: "Cristiano Ronaldo",
        description: "Uno de los mejores jugadores de la historia.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFc0Cry8E_MF-5Qkl5umnXnZ77LI0B8tYKTn-nIG48KTFKnzxLHhIP2Usqb8Hsq0ERpH8_pM0M06a1kB-A0CToMw",
        videoUrl: "videos/cristiano.mp4"
    },
    "LIONEL MESSI": {
        name: "Lionel Messi",
        description: "Uno de los mejores jugadores argentinos.",
        image: "https://media.gq.com.mx/photos/5ffb662e9274cd36fe35683c/16:9/w_2560%2Cc_limit/messi-cerveza-goles-porteros.jpg",
        videoUrl: "videos/messi.mp4"
    }
};

function searchPlayer() {
    const searchQuery = document.getElementById('search-bar').value.trim().toUpperCase();
    const playerData = playersData[searchQuery];
    const container = document.getElementById('player-info-container');
    container.innerHTML = '';

    if (playerData) {
        container.innerHTML = `
            <div class="section">
                <h2>¿Quién es ${playerData.name}?</h2>
                <p>${playerData.description}</p>
            </div>
            <div class="section image-container">
                <h2>Imagen de ${playerData.name}</h2>
                <img src="${playerData.image}" alt="Imagen de ${playerData.name}">
            </div>
            <div class="section video-container">
                <h2>Destacado de ${playerData.name}</h2>
                <video controls>
                    <source src="${playerData.videoUrl}" type="video/mp4">
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
        `;
    } else {
        container.innerHTML = "<p>No se encontró información sobre este jugador.</p>";
    }
}
