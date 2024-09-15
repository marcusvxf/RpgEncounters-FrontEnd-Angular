export interface ICreature {
  id?: number;
  name: string;
  description: string;
  challenger_level: number;
  armor_class: number;
  hit_points: string;
  life_points_dice_qtd: number;
  life_points_dice_type: number;
  life_points_dice_bonus: number;
  is_active: boolean;
  encounter_id: string;
  attacks: ICreatureAttack[];
  strength: string;
  dexterity: string;
  intelligence: string;
  charisma: string;
  wisdom: string;
  constitution: string;
  st_strength: string;
  st_dexterity: string;
  st_intelligence: string;
  st_charisma: string;
  st_wisdom: string;
  st_constitution: string;
  languages: string;
  immunities: string;
  passive_perspective: string;
  dark_vision: string;
}

export interface ICreatureInEncounter extends ICreature {
  real_hit_points: number;
  status: string;
  is_dead: boolean;
  initiative: number;
}

export interface ICreatureAttack {
  id: number;
  name: string;
  description: string;
  dice_qtd: number;
  dice_type: number;
  dice_bonus: number;
}
