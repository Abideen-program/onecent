import { iconImages } from "./images";

export const levelNames = [
  "Cent Newbie", // From 0 to 4999 coins
  "Silver", // From 5000 coins to 24,999 coins
  "Gold", // From 25,000 coins to 99,999 coins
  "Platinum", // From 100,000 coins to 999,999 coins
  "Diamond", // From 1,000,000 coins to 2,000,000 coins
  "Epic", // From 2,000,000 coins to 10,000,000 coins
  "Legendary", // From 10,000,000 coins to 50,000,000 coins
  "Master", // From 50,000,000 coins to 100,000,000 coins
  "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
  "Lord", // From 1,000,000,000 coins to ∞
];

export const levelMinPoints = [
  0, // Bronze
  5000, // Silver
  25000, // Gold
  100000, // Platinum
  1000000, // Diamond
  2000000, // Epic
  10000000, // Legendary
  50000000, // Master
  100000000, // GrandMaster
  1000000000, // Lord
];

export const tasks = [
  {
    id: 1,
    name: "Buy CENT on ShibaSwap",
    status: "notStarted",
    icon: iconImages.Shib,
    point: 500,
  },

  {
    id: 2,
    name: "Follow the Bus",
    status: "notStarted",
    icon: iconImages.X,
    point: 1000,
  },

  {
    id: 3,
    name: "Follow Casey Stubbs",
    status: "notStarted",
    icon: iconImages.X,
    point: 1000,
  },

  {
    id: 4,
    name: "Join our Telegram Channel",
    status: "notStarted",
    icon: iconImages.Telegram,
    point: 1500,
  },

  {
    id: 5,
    name: "Like and Repost",
    status: "notStarted",
    icon: iconImages.X,
    point: 500,
  },

  {
    id: 6,
    name: "Follow us on X",
    status: "notStarted",
    icon: iconImages.X,
    point: 1500,
  },

  {
    id: 7,
    name: "Watch Shib Bridging Tutorial",
    status: "notStarted",
    icon: iconImages.Youtube,
    point: 1000,
  },

  {
    id: 8,
    name: "Tag a Friend",
    status: "notStarted",
    icon: iconImages.X,
    point: 500,
  },
];
