const mainData = {
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

const mainStats = {
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

const skills = {
  Acrobatics: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: true,
    keyAbility: 'DEX',
    EN: 'Acrobatics',
    RU: 'Акробатика'
  },
  Appraise: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Appraise',
    RU: 'Оценка'
  },
  Bluff: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'CHA',
    EN: 'Bluff',
    RU: 'Блеф'
  },
  Climb: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: true,
    keyAbility: 'STR',
    EN: 'Climb',
    RU: 'Лазание'
  },
  Craft: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Craft',
    RU: 'Крафт'
  },
  Diplomacy: {
    rank: 1,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'CHA',
    EN: 'Diplomacy',
    RU: 'Дипломатия'
  },
  DisableDevice: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: true,
    keyAbility: 'DEX',
    EN: 'DisableDevice',
    RU: 'Обезвреживание ловушек'
  },
  Disguise: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'CHA',
    EN: 'Disguise',
    RU: 'Маскировка'
  },
  EscapeArtist: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: true,
    keyAbility: 'DEX',
    EN: 'Escape Artist',
    RU: 'Изворотливость'
  },
  Fly: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: true,
    keyAbility: 'DEX',
    EN: 'Fly',
    RU: 'Полёт'
  },
  HandleAnimal: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'CHA',
    EN: 'Handle Animal',
    RU: 'Дрессировка'
  },
  Heal: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'WIS',
    EN: 'Heal',
    RU: 'Лечение'
  },
  Intimidate: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'CHA',
    EN: 'Intimidate',
    RU: 'Запугивание'
  },
  KnowledgeArcana: {
    rank: 1,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Arcana)',
    RU: 'Знание (Магия)'
  },
  KnowledgeDungeoneering: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Dungeoneering)',
    RU: 'Знание (Подземелья)'
  },
  KnowledgeEngineering: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Engineering)',
    RU: 'Знание (Инженерия)'
  },
  KnowledgeGeography: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Geography)',
    RU: 'Знание (География)'
  },
  KnowledgeHistory: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (History)',
    RU: 'Знание (История)'
  },
  KnowledgeNature: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Nature)',
    RU: 'Знание (Природа)'
  },
  KnowledgeNobility: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Nobility)',
    RU: 'Знание ()'
  },
  KnowledgePlanes: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Planes)',
    RU: 'Знание (Равнины)'
  },
  KnowledgeReligion: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Religion)',
    RU: 'Знание (Религия)'
  },
  KnowledgeLocal: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Knowledge (Local)',
    RU: 'Знание ()'
  },
  Linguistic: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Linguistic',
    RU: 'Языкознание'
  },
  Perception: {
    rank: 1,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'WIS',
    EN: 'Perception',
    RU: 'Внимание'
  },
  Perform: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'CHA',
    EN: 'Perform',
    RU: 'Исполнение'
  },
  Profession: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'WIS',
    EN: 'Profession',
    RU: 'Профессия'
  },
  Ride: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: true,
    keyAbility: 'DEX',
    EN: 'Ride',
    RU: 'Верховая езда'
  },
  SenseMotive: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'WIS',
    EN: 'Sense Motive',
    RU: 'Проницательность'
  },
  SleightOfHand: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: true,
    keyAbility: 'DEX',
    EN: 'Sleight Of Hand',
    RU: 'Ловкость рук'
  },
  Spellcraft: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'INT',
    EN: 'Spellcraft',
    RU: 'Spellcraft'
  },
  Stealth: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: true,
    keyAbility: 'DEX',
    EN: 'Stealth',
    RU: 'Скрытность'
  },
  Survival: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: false,
    keyAbility: 'WIS',
    EN: 'Survival',
    RU: 'Выживание'
  },
  Swim: {
    rank: 0,
    class: true,
    untrained: true,
    armorPenalty: true,
    keyAbility: 'STR',
    EN: 'Swim',
    RU: 'Плавание'
  },
  UseMagicDevice: {
    rank: 0,
    class: true,
    untrained: false,
    armorPenalty: false,
    keyAbility: 'CHA',
    EN: 'Use Magic Device',
    RU: 'Использование магических устройств'
  },
};

const savingThrows = {
  FORT: {
    Base: 0,
    keyAbility: 'CON',
    Magic: 0,
    Misc: 0,
    Epic: 0,
    EN: 'Constitution',
    RU: 'Телосложение'
  },
  REFLEX: {
    Base: 0,
    keyAbility: 'DEX',
    Magic: 0,
    Misc: 0,
    Epic: 0,
    EN: 'Dexterity',
    RU: 'Ловкость'
  },
  WILL: {
    Base: 0,
    keyAbility: 'WIS',
    Magic: 0,
    Misc: 0,
    Epic: 0,
    EN: 'Wisdom',
    RU: 'Мудрость'
  }
};

module.exports = {
  mainData,
  mainStats,
  skills,
  savingThrows
};
