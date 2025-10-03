const { VenomScrapers } = require("venom-scraper/YouTube");

(async () => {
  console.log("\n🔎 Pesquisando...");
  console.log(await VenomScrapers.getPesquisa("alívio"));

  console.log("\n🔎 Pesquisando Áudio...");
  console.log(await VenomScrapers.getMp3("alívio"));

  console.log("\n🔎 Pesquisando Vídeo...");
  console.log(await VenomScrapers.getMp4("alívio"));
})();