document.addEventListener("DOMContentLoaded", () => {
  //Criando a Lista de Perfil
  const usernames = ["SLAriosi", "Eduardo-Silva-Rodrigues", "GustavoTaquiwi"];

  // Criando a variavel onde vai ficar os perfil
  const cardsContainer = document.getElementById("cards-container");

  // Função para criar e adicionar um card ao container
  const createCard = (data) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.name}">
        <h2>${data.name || "Nome não disponível"}</h2>
        <p>${data.bio || "Sem bio disponível"}</p>
        <a href="${data.html_url}" target="_blank">Ver perfil no GitHub</a>
      `;
    cardsContainer.appendChild(card);
  };

  // Buscar informações de cada usuário
  usernames.forEach((username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }
        return response.json();
      })
      .then((data) => {
        createCard(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar informações do GitHub:", error);
      });
  });
});
