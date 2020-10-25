const Axios = require('axios');

exports.createPages = async ({ actions: { createPage } }) => {
  

async function getData() {
  const masterRef = Axios.get(`${process.env.API_URL}`).then(resp => {
    return resp.data.refs[0].ref;
  });

  const refId = await masterRef;

  const dataRef = Axios.get(`${process.env.API_URL}/documents/search`, {params: { ref: refId, access_token: process.env.ACCESS_TOKEN }}).then(resp => {
    return resp.data.results;
  })
  return dataRef;
}

  const data = await getData();
  console.log(data);
  // Create a page that lists all Pokémon.
  createPage({
    path: `/prismic`,
    component: require.resolve('./src/templates/prismic.js'),
    context: { data }
  });

  // // Create a page for each Pokémon.
  // allPokemon.forEach(pokemon => {
  //   createPage({
  //     path: `/pokemon/${pokemon.name}/`,
  //     component: require.resolve('./src/templates/pokemon.js'),
  //     context: { pokemon }
  //   });

  //   // Create a page for each ability of the current Pokémon.
  //   pokemon.abilities.forEach(ability => {
  //     createPage({
  //       path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
  //       component: require.resolve('./src/templates/ability.js'),
  //       context: { pokemon, ability }
  //     });
  //   });
  // });
};