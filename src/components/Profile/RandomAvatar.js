import React from "react";
import Avatar from "avataaars";

const configs = {
  topType: [
    "NoHair",
    "Eyepatch",
    "Hat",
    "Hijab",
    "Turban",
    "WinterHat1",
    "WinterHat2",
    "WinterHat3",
    "WinterHat4",
    "LongHairBigHair",
    "LongHairBob",
    "LongHairBun",
    "LongHairCurly",
    "LongHairCurvy",
    "LongHairDreads",
    "LongHairFrida",
    "LongHairFro",
    "LongHairFroBand",
    "LongHairNotTooLong",
    "LongHairShavedSides",
    "LongHairMiaWallace",
    "LongHairStraight",
    "LongHairStraight2",
    "LongHairStraightStrand",
    "ShortHairDreads01",
    "ShortHairDreads02",
  ],
  accessoriesType: [
    "Blank",
    "Kurt",
    "Prescription01",
    "Prescription02",
    "Round",
    "Sunglasses",
    "Wayfarers",
  ],
  hatColor: [
    "Black",
    "Blue01",
    "Blue02",
    "Blue03",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelBlue",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Pink",
    "Red",
    "White",
  ],
  hairColor: [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
    "PastelPink",
    "Platinum",
    "Red",
    "SilverGray",
  ],
  facialHairType: [
    "Blank",
    "BeardMedium",
    "BeardLight",
    "BeardMajestic",
    "MoustacheFancy",
    "MoustacheMagnum",
  ],
  facialHairColor: [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
    "Platinum",
    "Red",
  ],
  clotheType: [
    "BlazerShirt",
    "BlazerSweater",
    "CollarSweater",
    "GraphicShirt",
    "Hoodie",
    "Overall",
    "ShirtCrewNeck",
    "ShirtScoopNeck",
    "ShirtVNeck",
  ],
  clotheColor: [
    "Black",
    "Blue01",
    "Blue02",
    "Blue03",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelBlue",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Pink",
    "Red",
    "White",
  ],
  graphicType: [
    "Bat",
    "Cumbia",
    "Deer",
    "Diamond",
    "Hola",
    "Pizza",
    "Resist",
    "Selena",
    "Bear",
    "SkullOutline",
    "Skull",
  ],
  eyeType: [
    "Close",
    "Cry",
    "Default",
    "Dizzy",
    "EyeRoll",
    "Happy",
    "Hearts",
    "Side",
    "Squint",
    "Surprised",
    "Wink",
    "WinkWacky",
  ],
  eyebrowType: [
    "Angry",
    "AngryNatural",
    "Default",
    "DefaultNatural",
    "FlatNatural",
    "RaisedExcited",
    "RaisedExcitedNatural",
    "SadConcerned",
    "SadConcernedNatural",
    "UnibrowNatural",
    "UpDown",
    "UpDownNatural",
  ],
  mouthType: [
    "Concerned",
    "Default",
    "Disbelief",
    "Eating",
    "Grimace",
    "Sad",
    "ScreamOpen",
    "Serious",
    "Smile",
    "Tongue",
    "Twinkle",
    "Vomit",
  ],
  skinColor: [
    "Tanned",
    "Yellow",
    "Pale",
    "Light",
    "Brown",
    "DarkBrown",
    "Black",
  ],
};

const configsKeys = Object.keys(configs);

function generateRandomAvatarOptions() {
  const options = {};
  const keys = [...configsKeys];
  keys.forEach((key) => {
    const configArray = configs[key];
    options[key] = configArray[Math.floor(Math.random() * configArray.length)];
  });

  return options;
}

export default function randomAvatar() {
  return (
    <Avatar
      // style={{ width: "50px", height: "50px" }}
      avatarStyle="Circle"
      {...generateRandomAvatarOptions()}
    />
  );
}
