import { FormControl } from '@angular/forms';

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
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  wisdom: number;
  constitution: number;
  st_strength: number;
  st_dexterity: number;
  st_intelligence: number;
  st_charisma: number;
  st_wisdom: number;
  st_constitution: number;
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

export interface ICreatureParams {
  query_string?: string;
  page?: number;
  limit?: number;
}

export interface ICreatureForm {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  challenger_level: FormControl<number | null>;
  armor_class: FormControl<number | null>;
  hit_points: FormControl<string | null>;
  life_points_dice_qtd: FormControl<number | null>;
  life_points_dice_type: FormControl<number | null>;
  life_points_dice_bonus: FormControl<number | null>;
  encounter_id: FormControl<string | null>;
  attacks: FormControl<ICreatureAttack[] | null>;
  strength: FormControl<number | null>;
  dexterity: FormControl<number | null>;
  intelligence: FormControl<number | null>;
  charisma: FormControl<number | null>;
  wisdom: FormControl<number | null>;
  constitution: FormControl<number | null>;
  st_strength: FormControl<number | null>;
  st_dexterity: FormControl<number | null>;
  st_intelligence: FormControl<number | null>;
  st_charisma: FormControl<number | null>;
  st_wisdom: FormControl<number | null>;
  st_constitution: FormControl<number | null>;
  languages: FormControl<string | null>;
  immunities: FormControl<string | null>;
  passive_perspective: FormControl<string | null>;
  dark_vision: FormControl<string | null>;
}
