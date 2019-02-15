export const mainData = {
  CharacterName: 'Arf De Kar',
  PlayerName: 'Sergey Kobelev',
  Deity: 'None',
  Religion: 'None',
  Alignment: 'Chaotic Good',
  Class: 'Sorcerer',
  Race: 'Aasimar / Outsider',
  Size: 'Medium / 5ft',
  Gender: 'Male',
  CharacterLevel: 1,
  ExperienceCur: 0,
  ExperienceNext: 2000,
  Speed: 'Walk 30 ft.',
  Vision: 'Darkvision (60 ft.)',
  Height: "6' 4\"",
  Age: 20,
  Eyes: '',
  Hair: '',
};

export const skills = {
  Acrobatics: {
    Untrained: true,
    ArmorPenalty: true,
    KeyAbility: 'DEX'
  },
  Appraise: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  Bluff: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'CHA'
  },
  Climb: {
    Untrained: true,
    ArmorPenalty: true,
    KeyAbility: 'STR'
  },
  Craft: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  Diplomacy: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'CHA'
  },
  DisableDevice: {
    Untrained: false,
    ArmorPenalty: true,
    KeyAbility: 'DEX'
  },
  Disguise: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'CHA'
  },
  EscapeArtist: {
    Untrained: true,
    ArmorPenalty: true,
    KeyAbility: 'DEX'
  },
  Fly: {
    Untrained: true,
    ArmorPenalty: true,
    KeyAbility: 'DEX'
  },
  HandleAnimal: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'CHA'
  },
  Heal: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'WIS'
  },
  Intimidate: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'CHA'
  },
  KnowledgeArcana: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeDungeoneering: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeEngineering: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeGeography: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeHistory: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeNature: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeNobility: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgePlanes: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeReligion: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  KnowledgeLocal: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  Linguistic: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  Perception: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'WIS'
  },
  Perform: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'CHA'
  },
  Profession: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'WIS'
  },
  Ride: {
    Untrained: true,
    ArmorPenalty: true,
    KeyAbility: 'DEX'
  },
  SenceMotive: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'WIS'
  },
  SleightOfHand: {
    Untrained: false,
    ArmorPenalty: true,
    KeyAbility: 'DEX'
  },
  Spellcraft: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'INT'
  },
  Stealth: {
    Untrained: true,
    ArmorPenalty: true,
    KeyAbility: 'DEX'
  },
  Survival: {
    Untrained: true,
    ArmorPenalty: false,
    KeyAbility: 'WIS'
  },
  Swim: {
    Untrained: true,
    ArmorPenalty: true,
    KeyAbility: 'STR'
  },
  UseMagicDevice: {
    Untrained: false,
    ArmorPenalty: false,
    KeyAbility: 'CHA'
  },
};

export const mainStats = {
  STR: {
    abilityScore: 14,
    tempAdj: 14,
    EN: 'Strength',
    RU: 'Сила'
  },
  DEX: {
    abilityScore: 14,
    tempAdj: 14,
    EN: 'Dexterity',
    RU: 'Ловкость'
  },
  CON: {
    abilityScore: 10,
    tempAdj: 10,
    EN: 'Constitution',
    RU: 'Телосложение'
  },
  INT: {
    abilityScore: 12,
    tempAdj: 12,
    EN: 'Intelligence',
    RU: 'Интеллект'
  },
  WIS: {
    abilityScore: 10,
    tempAdj: 10,
    EN: 'Wisdom',
    RU: 'Воля'
  },
  CHA: {
    abilityScore: 16,
    tempAdj: 16,
    EN: 'Charisma',
    RU: 'Харизма'
  },
};

export const savingThrows = {
  FORT: {
    Base: 0,
    Ability: 0,
    Magic: 0,
    Misc: 0,
    Epic: 0,
    EN: 'Constitution',
    RU: 'Телосложение'
  },
  REFLEX: {
    Base: 0,
    Ability: 0,
    Magic: 0,
    Misc: 0,
    Epic: 0,
    EN: 'Dexterity',
    RU: 'Ловкость'
  },
  WILL: {
    Base: 0,
    Ability: 0,
    Magic: 0,
    Misc: 0,
    Epic: 0,
    EN: 'Wisdom',
    RU: 'Мудрость'
  }
};
