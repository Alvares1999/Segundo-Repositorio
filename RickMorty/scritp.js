document.addEventListener('DOMContentLoaded', function() {
    // Certifique-se de que os IDs estejam corretos e correspondam ao seu HTML
    const fetchPersonagemButton = document.getElementById('fetchPersonagemButton');
    const personagemInput = document.getElementById('personagemInput');
    const personagemDetails = document.getElementById('personagemDetails');

    fetchPersonagemButton.addEventListener('click', function() {
        const personagemNameOrId = personagemInput.value.trim().toLowerCase();

        if (personagemNameOrId === '') {
            alert("Por favor, digite um nome ou ID do Personagem");
            return;
        }

        personagemDetails.innerHTML = 'Carregando...';

        fetch(`https://rickandmortyapi.com/api/character/${personagemNameOrId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Personagem não encontrado');
                }
                return response.json();
            })
            .then(data => {
                const { name, id, species, gender, image } = data;

                // Atualiza o conteúdo da página com as informações do personagem
                personagemDetails.innerHTML = `
                    <h2>${name} (#${id})</h2>
                    <p>Espécie: ${species}</p>
                    <p>Gênero: ${gender}</p>
                    <img src="${image}" alt="${name}" style="max-width: 200px;"/>
                `;
            })
            .catch(error => {
                personagemDetails.innerHTML = `<p>${error.message}</p>`;
            });
    });
});
