require("dotenv").config();
const mongoose = require("mongoose");
const Box = require("./models/Box");

const MONGOOSE = process.env.DATABASE_URL;

mongoose
  .connect(MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log(err);
  });

const seedBoxes = [
  {
    name: "Silver Tempest",
    description:
      "An ominous rumble echoes in the distance, and Lugia VSTAR emerges from the ocean’s depths to answer its call! Uncharted territory lies waiting to be explored alongside Alolan Vulpix VSTAR, while Serperior, Unown, and Mawile join the expedition as Pokémon VSTAR, and a legendary battle awaits as Regieleki VMAX and Regidrago VSTAR awaken from slumber. Discover powerful partnerships in the Trainer Gallery, and set a course for adventure with the Pokémon TCG: Sword & Shield—Silver Tempest expansion!",
    image:
      "https://res.cloudinary.com/dx5y4ijgq/image/upload/v1674071564/boostedboxes/silver_tempest_d6arm6.jpg",
    cost: 109,
    inventory: 99,
  },
  {
    name: "Astral Radiance",
    description:
      "Travel back to a land of myths, legends, and wilderness as Origin Forme Dialga VSTAR and Origin Forme Palkia VSTAR shape the fabric of time and space! Decidueye, Typhlosion, and Samurott arrive as Hisuian Pokémon VSTAR, joining more Pokémon and Trainers from the ancient region of Hisui. Meanwhile, Shiny Pokémon reappear as Radiant Pokémon, with Radiant Greninja leading the charge in the Pokémon TCG: Sword & Shield—Astral Radiance expansion!",
    image:
      "https://res.cloudinary.com/dx5y4ijgq/image/upload/v1674071564/boostedboxes/astral_radiance_duj87d.jpg",
    cost: 109,
    inventory: 79,
  },
  {
    name: "Evolving Skies",
    description:
      "Feel the power of the shifting winds, and brace for an epic storm as mighty Dragon-type Pokémon make their triumphant return! Rayquaza VMAX leads the surge from on high, and Duraludon VMAX towers above the land in its Gigantamax form, joined by Dragonite V, Noivern V, and more. As the clouds part, Eevee’s Evolutions appear in a full rainbow of Pokémon V and Pokémon VMAX to signal a bright new day in Pokémon TCG: Sword & Shield—Evolving Skies!",
    image:
      "https://res.cloudinary.com/dx5y4ijgq/image/upload/v1674071564/boostedboxes/evolving_skies_uqvynm.jpg",
    cost: 199,
    inventory: 19,
  },
  {
    name: "Lost Origin",
    description:
      "As the boundary between dimensions tears apart, Giratina VSTAR plunges the world into the abyssal shadow of the Lost Zone! While Aerodactyl VSTAR harnesses this distorted power, Magnezone, Drapion, Hisuian Goodra, and Hisuian Zoroark also appear as Pokémon VSTAR to show off their own astonishing skills, joined by Kyurem VMAX. Above the shadows, Enamorus V and Radiant Gardevoir conjure up dazzling magic in the Sword & Shield—Lost Origin expansion!",
    image:
      "https://res.cloudinary.com/dx5y4ijgq/image/upload/v1674071564/boostedboxes/lost_origin_sr5la4.jpg",
    cost: 149,
    inventory: 199,
  },
  {
    name: "Brilliant Stars",
    description:
      "Overflowing with light, Arceus VSTAR descends from on high to share its celestial powers with other Pokémon V. Shaymin VSTAR, Charizard VSTAR, and Whimsicott VSTAR find themselves wielding awesome new VSTAR Powers, while Mimikyu VMAX, Aggron VMAX, and Kingler VMAX in its Gigantamax form boast tremendous strengths of their own. Discover glimmering constellations and start your journey toward stellar greatness in the Pokémon TCG: Sword & Shield—Brilliant Stars expansion!",
    image:
      "https://res.cloudinary.com/dx5y4ijgq/image/upload/v1674071564/boostedboxes/brilliant_stars_sxrsus.jpg",
    cost: 89,
    inventory: 59,
  },
];

const seedDB = async () => {
  await Box.deleteMany({});
  await Box.insertMany(seedBoxes);
};

seedDB().then(() => {
  mongoose.connection.close();
});
