import { OWL_LOGO_DATA_URI } from '../asset/owlLogoDataUri';

export interface BoardGame {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  tagline: string;
  bestFor: string;
  description: string;
  price: number;
  comparePrice: number;
  stock: number;
  collection: 'bestseller' | 'new-arrival';
  minPlayers: number;
  maxPlayers: number;
  minAge: number;
  minPlaytime: number;
  maxPlaytime: number;
  complexity: number;
  experience: 'Light' | 'Gateway' | 'Medium' | 'Deep';
  categories: string[];
  bggLink: string;
  storeUrl: string;
  images: string[];
  spineColor: string;
}

export const BRAND_ASSETS = {
  logoWordmark: 'https://www.owlsonboard.com/images/logo-mobile.webp',
  logoFullSvg: 'https://www.owlsonboard.com/images/Logo5.svg',
  favicon: '/favicon.ico',
  owlMark: OWL_LOGO_DATA_URI,
  owlAvatar: OWL_LOGO_DATA_URI,
  heroBanner: 'https://www.owlsonboard.com/images/1.png',
  storyPhoto: 'https://www.owlsonboard.com/images/spotlight-narrative.jpeg',
  categories: {
    strategy: 'https://www.owlsonboard.com/images/strategy.jpg',
    gateway: 'https://www.owlsonboard.com/images/gateway.jpg',
    family: 'https://www.owlsonboard.com/images/family.jpg',
    party: 'https://www.owlsonboard.com/images/party.jpg',
  },
};

export const STORE_LINKS = {
  home: 'https://www.owlsonboard.com/',
  shop: 'https://www.owlsonboard.com/shop',
  newArrivals: 'https://www.owlsonboard.com/shop?category=new-arrivals',
  strategy: 'https://www.owlsonboard.com/shop?category=strategy',
  gateway: 'https://www.owlsonboard.com/shop?category=gateway',
  family: 'https://www.owlsonboard.com/shop?category=family',
  party: 'https://www.owlsonboard.com/shop?category=party',
  ourStory: 'https://www.owlsonboard.com/our-story',
  whatsapp: 'https://chat.whatsapp.com/EbtjA0f7bcu57NAb4YbDqq?s=cl',
  instagram: 'https://instagram.com/squirclegames',
  email: 'mailto:support@owlsonboard.com',
};

export const FREE_SHIPPING_THRESHOLD = 5000;

export const BOARD_GAMES: BoardGame[] = [
  {
    "id": "ccb56e4b-dbf4-429f-9b22-fb9c3eb1cee1",
    "slug": "creature-comforts",
    "name": "CREATURE COMFORTS",
    "displayName": "Creature Comforts",
    "tagline": "Cozy woodland dice-placement crafting — illustrated like a storybook.",
    "bestFor": "Cozy Sunday strategy & families",
    "description": "Life in the forest is a lot of fun, at least while the sun is shining and the leaves are on the trees. Those days don’t last forever though, and long before the weather starts to change, the wise animals start to harvest for the long cold winter ahead. You will spend many months tucked into your burrow and you want to make it as cozy as possible. A nice bowl of soup, a comfortable rocking chair, and some toys and games will go a long way to make those dark winter days pass by quickly.\n\nIn Creature Comforts, you spend the Spring, Summer, and Fall gathering different goods from the forest and spending them to collect items that will make your home more inviting while the world outside is covered in a layer of snow. Each round you send family members out to various locations in an attempt to gain supplies. If they fall short of their goal, they’ll learn a lesson and be better prepared next time. The family that has created the most comfortable den wins the game.\n\n—description from the publisher",
    "price": 5610,
    "comparePrice": 6699,
    "stock": 5,
    "collection": "bestseller",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minAge": 8,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "complexity": 2.4,
    "experience": "Medium",
    "categories": [
      "In Stock",
      "Strategy",
      "Pre Order",
      "Sale"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/304051",
    "storeUrl": "https://www.owlsonboard.com/product/creature-comforts",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718596-81f4n3xOquL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718576-81tSRhGBS0L._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718609-81vb_KStYvL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718626-810fhawq_8L._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718591-81aJGu1zX4L._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718602-81_4ZeioDOL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718638-91TKLXg9PHL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1783141718649-81SFai8blWL._SL1500_.webp"
    ],
    "spineColor": "#7A4C2E"
  },
  {
    "id": "dedfa3c9-8d45-4918-afab-10421defda21",
    "slug": "sagrada-en",
    "name": "SAGRADA EN",
    "displayName": "Sagrada",
    "tagline": "Draft translucent jewel dice to build a stained-glass masterpiece.",
    "bestFor": "Visual puzzle fans & date nights",
    "description": "Draft dice and use the tools-of-the-trade in Sagrada to carefully construct your stained glass window masterpiece.\n\nIn more detail, each player builds a stained glass window by building up a grid of dice on their player board. Each board has some restrictions on which color or shade (value) of die can be placed there. Dice of the same shade or color may never be placed next to each other. Dice are drafted in player order, with the start player rotating each round, snaking back around after the last player drafts two dice. Scoring is variable per game based on achieving various patterns and varieties of placement...as well as bonus points for dark shades of a particular hidden goal color.\n\nSpecial tools can be used to help you break the rules by spending skill tokens; once a tool is used, it then requires more skill tokens for the other players to use them.",
    "price": 3500,
    "comparePrice": 3999,
    "stock": 5,
    "collection": "bestseller",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minAge": 8,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "complexity": 1.9,
    "experience": "Gateway",
    "categories": [
      "Strategy",
      "Party",
      "5+ Players",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/107448",
    "storeUrl": "https://www.owlsonboard.com/product/sagrada-en",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799996916-sagrada_01.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799996941-sagrada_02.webp"
    ],
    "spineColor": "#26466D"
  },
  {
    "id": "d9fae70f-518d-406f-a2f8-c5650bb313be",
    "slug": "camel-up",
    "name": "CAMEL UP EN",
    "displayName": "Camel Up (2nd Edition)",
    "tagline": "3D pyramid dice-shaker & hilarious stacked-camel betting races.",
    "bestFor": "Mixed-age groups & big laughs",
    "description": "In Camel Up, up to eight players bet on five racing camels, trying to suss out which will place first and second in a quick race around a pyramid. The earlier you place your bet, the more you can win — should you guess correctly, of course. Camels don't run neatly, however, sometimes landing on top of another one and being carried toward the finish line. Who's going to run when? That all depends on how the dice come out of the pyramid dice shaker, which releases one die at a time when players pause from their bets long enough to see who's actually moving!\n\nPlayers roll all 5 dice to setup the start positions of the camels.  On each leg, players pick one betting card for each color camel, showing how many coins they will win/lose, depending on the camel's position after the leg.  The dice are then rolled in the pyramid dice roller, which allows one die to come out at a time and moves the matching color camel.  Players can also place oasis cards to earn extra coins.  After all 5 camels are moved, bets are resolved and a new leg start.  Play continues until a camel passes the finish line.\n\nOnce a camel crossess the finish line, all end of race bets are resolved and the player with the most coins wins.",
    "price": 4999,
    "comparePrice": 5999,
    "stock": 5,
    "collection": "bestseller",
    "minPlayers": 3,
    "maxPlayers": 8,
    "minAge": 8,
    "minPlaytime": 20,
    "maxPlaytime": 30,
    "complexity": 1.5,
    "experience": "Gateway",
    "categories": [
      "In Stock",
      "Family",
      "Pre Order"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/153938",
    "storeUrl": "https://www.owlsonboard.com/product/camel-up",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799965333-camel_up_01.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799965359-camel_up_02.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799965413-camel_up_03.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799965440-camel_up_04.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799965500-camel_up_05.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779799965526-camel_up_06.webp"
    ],
    "spineColor": "#B36A1F"
  },
  {
    "id": "21b7b856-4ba8-4f98-8d98-71302e806ff3",
    "slug": "wingspan-en",
    "name": "WINGSPAN EN",
    "displayName": "Wingspan",
    "tagline": "Award-winning engine builder with 180 illustrated birds & tactile wooden eggs.",
    "bestFor": "Modern classics & thoughtful tables",
    "description": "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features 180 birds illustrated by Natalia Rojas and Ana Maria Martinez.\n\nYou are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats  focus on several key aspects of growth:\n\nGain food tokens via custom dice in a birdfeeder dice tower",
    "price": 5320,
    "comparePrice": 6399,
    "stock": 4,
    "collection": "bestseller",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minAge": 10,
    "minPlaytime": 40,
    "maxPlaytime": 70,
    "complexity": 2.5,
    "experience": "Medium",
    "categories": [
      "Strategy",
      "Pre Order",
      "Sale",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/266192/wingspan",
    "storeUrl": "https://www.owlsonboard.com/product/wingspan-en",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1781122796959-wingspan_01.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1781122796987-wingspan_02.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1781122797014-wingspan_03.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1781122797043-wingspan_04.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1781122797069-wingspan_05.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1781122797097-wingspan_06.webp"
    ],
    "spineColor": "#1F4B5C"
  },
  {
    "id": "eb6fd994-b684-40f7-bc93-8dd0678267a9",
    "slug": "terraforming-mars-en",
    "name": "TERRAFORMING MARS EN",
    "displayName": "Terraforming Mars",
    "tagline": "Command rival corporations to turn the Red Planet habitable.",
    "bestFor": "Dedicated strategy nights (2 hrs)",
    "description": "In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.\n\nAs a player, you acquire unique project cards (from over two hundred different ones) by buying them to your hand. The cards can give you immediate bonuses, as well as increasing your production of different resources. Many cards also have requirements and they become playable when the temperature, oxygen, or ocean coverage increases enough. Buying cards is costly, so there is a balance between buying cards and actually playing them. Standard Projects are always available to complement your hand of cards. Your basic income, as well as your basic score, are based on your Terraform Rating. However, your income is boosted by your production, and VPs are also gained from many other sources.\n\nYou keep track of your production and resources on your player board.  The game uses six types of resources: MegaCredits, Steel, Titanium, Plants, Energy, and Heat. On the game board, you compete for the best places for your city tiles, ocean tiles, and greenery tiles. You also compete for different Milestones and Awards worth many VPs. Each round is called a generation and consists of the following phases:",
    "price": 5430,
    "comparePrice": 6499,
    "stock": 4,
    "collection": "bestseller",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minAge": 12,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "complexity": 3.3,
    "experience": "Deep",
    "categories": [
      "Strategy",
      "Sale",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/167791",
    "storeUrl": "https://www.owlsonboard.com/product/terraforming-mars-en",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779800003558-terraforming_mars_01.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779800003615-terraforming_mars_02.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779800003641-terraforming_mars_03.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779800003668-terraforming_mars_04.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779800003697-terraforming_mars_05.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1779800003726-terraforming_mars_06.webp"
    ],
    "spineColor": "#8E2D1B"
  },
  {
    "id": "40455523-3427-4e65-a8cf-9167e42afe12",
    "slug": "what-s-the-point-the-cactus-card-game",
    "name": "What's The Point? The Cactus Card Game",
    "displayName": "What's The Point? Cactus Card Game",
    "tagline": "Quick set-collection & playful sabotage for lively tables.",
    "bestFor": "Quick icebreaker & travel",
    "description": "Cactus Game is a quick, interactive card game where players compete to collect the most Point cards by assembling sets of cactus characters and using action cards to disrupt their opponents. With simple rules and lively player interaction, it offers a mix of strategy, timing, and luck.\n\nOn your turn, you may play cards until you either gain a Point card or draw a card, which immediately ends your turn. Players score points by playing sets of three matching Character cards, with stronger characters earning more points, and Wild cards helping complete sets. Action cards add variety by allowing players to steal cards or points, swap hands, or block actions with well-timed “Stop” cards.\n\nThe game ends as soon as a player reaches the required number of Point cards based on the number of players. That player wins immediately.",
    "price": 1169,
    "comparePrice": 1999,
    "stock": 1,
    "collection": "new-arrival",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minAge": 7,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "complexity": 1.0,
    "experience": "Light",
    "categories": [
      "Family",
      "Gateway",
      "New Arrivals",
      "5+ Players",
      "Party",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/263323/cactus-game",
    "storeUrl": "https://www.owlsonboard.com/product/what-s-the-point-the-cactus-card-game",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366747736-81aYHG08pvL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366750784-91PatUDwfEL._SX679_.webp"
    ],
    "spineColor": "#2D5A3D"
  },
  {
    "id": "4d66547a-2827-423b-8967-805781b37f5f",
    "slug": "gimme-that",
    "name": "GIMME THAT!",
    "displayName": "Gimme That!",
    "tagline": "One pencil, up to 8 players, pure frantic table chaos.",
    "bestFor": "Loud house parties & kids",
    "description": "Gimme That! is a high-energy, potato-themed party game where players race to write numbers from 1 to 100 on their sheet, but the twist is that the entire group shares only one pencil. While one player frantically scribbles as fast as they can, the others take turns rolling a giant die to trigger chaotic group actions—like high-fives (\"High Fry\") or table-pounding (\"Mashed Potatoes\") until someone rolls the pencil icon, yells \"Gimme That!\", and snatches the pencil away to start their own count.",
    "price": 1099,
    "comparePrice": 1999,
    "stock": 3,
    "collection": "new-arrival",
    "minPlayers": 3,
    "maxPlayers": 8,
    "minAge": 7,
    "minPlaytime": 5,
    "maxPlaytime": 10,
    "complexity": 1.0,
    "experience": "Light",
    "categories": [
      "Family",
      "Gateway",
      "New Arrivals",
      "5+ Players",
      "Party",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/357674/gimme-that",
    "storeUrl": "https://www.owlsonboard.com/product/gimme-that",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366282743-71WHUUh0vaL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366282723-41mdJ-UstHL.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366282751-71tLzKezp2L._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366282747-719FG1WyfmL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366282754-71i6Wax24oL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791366282718-41lTyKYupFL.webp"
    ],
    "spineColor": "#B94A2C"
  },
  {
    "id": "1c0e42d3-643d-4af0-a49c-1b950de5562a",
    "slug": "who-did-it",
    "name": "Who did it?",
    "displayName": "Who Did It?",
    "tagline": "Snappy 15-minute memory bluffing with cheeky pet suspects.",
    "bestFor": "Family warm-ups & ages 6+",
    "description": "Who Did It? is a fast-paced, humorous memory and card game for 3 to 6 players where everyone races to clear their pets of blame for a mess left in the living room. Each round, a player declares their pet's innocence and accuses another animal (e.g., \"It wasn't my cat, it was a goldfish!\"), prompting all other players to quickly search their hands and slap down the accused animal's card first. The frantic chain continues until someone mistakenly accuses an animal that has already been completely played or gets stuck with the final card, earning them a poop token. The game ends when a player accumulates three tokens, and the person with the fewest tokens wins the game.",
    "price": 749,
    "comparePrice": 999,
    "stock": 3,
    "collection": "new-arrival",
    "minPlayers": 3,
    "maxPlayers": 6,
    "minAge": 6,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "complexity": 1.0,
    "experience": "Light",
    "categories": [
      "Family",
      "Party",
      "5+ Players",
      "Gateway",
      "New Arrivals",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/241491/who-did-it",
    "storeUrl": "https://www.owlsonboard.com/product/who-did-it",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365803969-71RnhE_PioL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365803976-71tD9xJkB2L._SX679_.webp"
    ],
    "spineColor": "#8A4F2B"
  },
  {
    "id": "f5bb8800-a0bd-4304-8d48-e2eb41ba3657",
    "slug": "got-five",
    "name": "Got Five!",
    "displayName": "Got Five!",
    "tagline": "Clever deduction race to crack your five hidden tiles first.",
    "bestFor": "Puzzle lovers & coffee-table play",
    "description": "Got Five! is a fast-paced game of logic and deduction where players race to figure out five hidden number tiles on their own rack that only their opponents can see. Each turn, you draw a tile from the center supply to add to a shared pool, then use that tile to either narrow down your hidden numerical sequence or check if it matches the dot count of one of your secret tiles. The game balances high-stakes deduction with a risk of sudden elimination, as the first player to correctly guess their entire sequence and shout \"Got Five!\" wins, but a single wrong guess puts you out of the running.",
    "price": 2099,
    "comparePrice": 2199,
    "stock": 7,
    "collection": "new-arrival",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minAge": 7,
    "minPlaytime": 10,
    "maxPlaytime": 15,
    "complexity": 1.4,
    "experience": "Light",
    "categories": [
      "Family",
      "3 - 4 Players",
      "Gateway",
      "New Arrivals",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/453526/got-five",
    "storeUrl": "https://www.owlsonboard.com/product/got-five",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365554225-81DoJ-aWxrL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365448876-81794TcGokL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365448871-81U_DhAkEJL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365448862-71yHVm67RZL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365448866-81HdMnL8UwL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365448839-61byKQY8nOL._SX679_.webp"
    ],
    "spineColor": "#1F4E79"
  },
  {
    "id": "0bb07de7-cb55-4db5-8328-9184d7cd416c",
    "slug": "battle-sheep",
    "name": "Battle Sheep",
    "displayName": "Battle Sheep",
    "tagline": "Tactile hexagonal territory battles — 1 minute to teach, endlessly replayable.",
    "bestFor": "Abstract duels & family nights",
    "description": "Battle Sheep is a fast-paced, family-friendly abstract strategy board game where 2 to 4 players compete to occupy the most pasture spaces on a modular hexagonal grid. Players begin by constructing a unique map out of pasture tiles and placing their starting stack of 16 sheep tokens on an outer edge. On each turn, you must split one of your stacks, leave at least one sheep behind, and move the rest in a straight line until they are blocked by another player or the edge of the board. The game ends when no legal moves remain, and the player who has successfully spread their flock to control the most individual spaces wins the game.",
    "price": 2200,
    "comparePrice": 2999,
    "stock": 3,
    "collection": "new-arrival",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minAge": 7,
    "minPlaytime": 10,
    "maxPlaytime": 15,
    "complexity": 1.5,
    "experience": "Gateway",
    "categories": [
      "Family",
      "3 - 4 Players",
      "Gateway",
      "New Arrivals",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/54137/battle-sheep",
    "storeUrl": "https://www.owlsonboard.com/product/battle-sheep",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791365007123-71tN3xYTjhL._SY522_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791364964995-71zg7JdB3QL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791364965021-71sUPx7MqrL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791364965039-81tDYdx_1cL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791364964989-711Ep6QL_KL._SL1254_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791364965032-81KZXRTHYWL._SL1500_.webp"
    ],
    "spineColor": "#3F6A2B"
  },
  {
    "id": "8cdbf90c-84cb-4d17-975e-b55d6e704099",
    "slug": "i-know-you-dont",
    "name": "I know... You Don't",
    "displayName": "I Know... You Don't",
    "tagline": "Cooperative pattern-cracking where everyone races to spot the secret rule.",
    "bestFor": "Group brainteasers & teams",
    "description": "I Know... You Don't is a fast-paced, cooperative deduction card game for 3 to 7 players where everyone tries to figure out a hidden pattern. One player acts as the Rule Keeper, selecting a secret rule that ranges from simple color sequences to complex logic puzzles, and places a starting card down as a clue. The remaining players must test their theories by laying down cards from their hands; correct cards stay on the table to help build the pattern, while incorrect cards bounce back to the player. The goal is to crack the code and empty your hand first, but betting wrong means getting stuck with all your cards.",
    "price": 679,
    "comparePrice": 999,
    "stock": 2,
    "collection": "new-arrival",
    "minPlayers": 2,
    "maxPlayers": 7,
    "minAge": 7,
    "minPlaytime": 10,
    "maxPlaytime": 10,
    "complexity": 1.0,
    "experience": "Light",
    "categories": [
      "Family",
      "Party",
      "Gateway",
      "New Arrivals",
      "5+ Players",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/451652/i-knowyou-dont",
    "storeUrl": "https://www.owlsonboard.com/product/i-know-you-dont",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791363649079-41jk60EgA6L._SY300_SX300_QL70_FMwebp_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791363649180-81TznhDaZ1L._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791363649175-81WTRaJtEWL._SX679_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791363649171-71RsU4SZROL._SX679_.webp"
    ],
    "spineColor": "#383B66"
  },
  {
    "id": "fddc64a1-b443-4469-ab1c-b26d0faba340",
    "slug": "jelly-fish-toast-jam",
    "name": "JELLY FISH TOAST & JAM",
    "displayName": "Jelly Fish Toast & Jam",
    "tagline": "Pun-filled 10-minute memory & set collection for all ages.",
    "bestFor": "Fast laughs & filler rounds",
    "description": "Jelly Fish Toast & Jam is a fast-paced, 10-minute multiplayer card game that perfectly blends memory, set collection, and silly, pun-filled fun for 2 to 6 players. Easy to learn but strategically clever, this compact tabletop game challenges kids and adults alike to build matching sets while outmanoeuvring opponents with witty sabotage moves. Its quick setup and lightweight design make it the ultimate travel companion for road trips, vacations, and family game nights, as well as a fantastic icebreaker for parties or classrooms. With shifting objectives, evolving tactics, and vibrant artwork, every round offers high replay value and non-stop laughter, making it an ideal gift or stocking stuffer for players of all ages.",
    "price": 679,
    "comparePrice": 999,
    "stock": 4,
    "collection": "new-arrival",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minAge": 7,
    "minPlaytime": 10,
    "maxPlaytime": 10,
    "complexity": 1.0,
    "experience": "Light",
    "categories": [
      "In Stock",
      "Family",
      "Party",
      "Gateway",
      "New Arrivals"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/451650/jelly-fish-toast-and-jam",
    "storeUrl": "https://www.owlsonboard.com/product/jelly-fish-toast-jam",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791363436345-61TcgJLv8tL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791363436357-71Y4FqFuqRL._SL1500_.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1791363436364-710IsLtwuTL._SL1500_.webp"
    ],
    "spineColor": "#9E3A64"
  },
  {
    "id": "fc6ae7d5-2bd6-4095-94aa-71e80f7dbace",
    "slug": "exploding-kittens-party-pack",
    "name": "EXPLODING KITTENS PARTY PACK IMPORTED EN",
    "displayName": "Exploding Kittens: Party Pack",
    "tagline": "Imported 10-player chaos combining Exploding & Imploding Kittens.",
    "bestFor": "Big Diwali & house parties (up to 10P)",
    "description": "This stand-alone game includes cards from Exploding Kittens, Imploding Kittens and the Exploding Kittens App and allows 2-10 players\n\nExploding Kittens is a kitty-powered version of Russian Roulette. Players take turns drawing cards until someone draws an exploding kitten and loses the game. The deck is made up of cards that let you avoid exploding by peeking at cards before you draw, forcing your opponent to draw multiple cards, or shuffling the deck.",
    "price": 2999,
    "comparePrice": 3999,
    "stock": 4,
    "collection": "new-arrival",
    "minPlayers": 2,
    "maxPlayers": 10,
    "minAge": 7,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "complexity": 1.1,
    "experience": "Light",
    "categories": [
      "Strategy",
      "5+ Players",
      "Pre Order",
      "Medium",
      "Sale",
      "In Stock"
    ],
    "bggLink": "https://boardgamegeek.com/boardgame/256804",
    "storeUrl": "https://www.owlsonboard.com/product/exploding-kittens-party-pack",
    "images": [
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1782940588149-EKPPAngled_1300x.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1782940598886-EKPPContents_1300x.webp",
      "https://squircle-games.s3.ap-south-1.amazonaws.com/website_storage/images/1782940593412-EKPPBack_1300x.webp"
    ],
    "spineColor": "#A8231E"
  }
];

export interface CuratedTableSet {
  id: string;
  title: string;
  occasion: string;
  description: string;
  players: string;
  duration: string;
  slugs: string[];
  highlightNote: string;
}

export const CURATED_TABLE_SETS: CuratedTableSet[] = [
  {
    id: 'house-party-night',
    title: 'The Indian House Party Table',
    occasion: 'Hosting 6–10 Friends',
    description:
      'Zero-friction laughter from the first round to midnight. Start with rapid-fire bluffing, ramp up with 10-player Exploding Kittens, and finish with stacked-camel betting.',
    players: '3–10 Players',
    duration: '10–30 min rounds',
    slugs: ['exploding-kittens-party-pack', 'gimme-that', 'who-did-it'],
    highlightNote: 'Save ₹2,150 off MRP · Almost unlocks Free Shipping',
  },
  {
    id: 'sunday-strategy-atelier',
    title: 'The Modern Strategy Collector Set',
    occasion: '2–5 Thoughtful Gamers',
    description:
      'Two globally acclaimed, tactile masterpieces that define modern tabletop design — from Elizabeth Hargrave’s 180 illustrated birds to translucent stained-glass drafting.',
    players: '1–5 Players',
    duration: '45–70 min',
    slugs: ['wingspan-en', 'sagrada-en'],
    highlightNote: 'Instant Free Pan-India Shipping · Save ₹1,578 off MRP',
  },
  {
    id: 'family-weekend-box',
    title: 'Multi-Generation Family Weekend',
    occasion: 'Ages 7 to 70 Around One Table',
    description:
      'Easy to teach in three minutes, endlessly rewarding for kids, parents, and grandparents alike — blending tactile hexagon sheep battles with cozy woodland crafting.',
    players: '2–5 Players',
    duration: '15–45 min',
    slugs: ['creature-comforts', 'battle-sheep'],
    highlightNote: 'Instant Free Pan-India Shipping · Save ₹1,888 off MRP',
  },
];
