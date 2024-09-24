// FETCH FUNCTION IS PROMISE BASED SO ITS EITHER GET RESOLVED OR REJECT
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));

// RESPONSE IS ALSO PROMISE SO ITS EITHER GET RESOLVED OR REJECT SO USE .then()
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

// SPONGEBOB IS NOT A POKEMON SO , EVEN IT CANNOT LOCATE THE RESOURCE YOUR PROMISE STILL GETS
// RESOLVE NOT REJECT .then((response) => response.json()) change to response => console.log(response)
// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
//   .then((response) => response.json())
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

// FETCH FUNCCTION IS PROMISE BASED SO AWAIT
// async function fetchData() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/raichu");

//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
