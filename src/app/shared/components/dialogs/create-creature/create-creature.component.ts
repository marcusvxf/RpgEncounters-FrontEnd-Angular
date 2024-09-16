import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {
  ICreatureAttack,
  ICreatureForm,
} from '../../../interfaces/creature.interface';

@Component({
  selector: 'app-create-creature',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './create-creature.component.html',
  styleUrl: './create-creature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCreatureComponent {
  public creature_form: FormGroup<ICreatureForm> = new FormGroup<ICreatureForm>(
    {
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      challenger_level: new FormControl(null, [Validators.required]),
      armor_class: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      hit_points: new FormControl('', [Validators.required]),
      life_points_dice_qtd: new FormControl(null, [Validators.required]),
      life_points_dice_type: new FormControl(null, [Validators.required]),
      life_points_dice_bonus: new FormControl(null, [Validators.required]),
      encounter_id: new FormControl('', [Validators.required]),
      attacks: new FormControl<ICreatureAttack[]>([], [Validators.required]),
      strength: new FormControl(null, [Validators.required]),
      dexterity: new FormControl(null, [Validators.required]),
      intelligence: new FormControl(null, [Validators.required]),
      charisma: new FormControl(null, [Validators.required]),
      wisdom: new FormControl(null, [Validators.required]),
      constitution: new FormControl(null, [Validators.required]),
      st_strength: new FormControl(null, [Validators.required]),
      st_dexterity: new FormControl(null, [Validators.required]),
      st_intelligence: new FormControl(null, [Validators.required]),
      st_charisma: new FormControl(null, [Validators.required]),
      st_wisdom: new FormControl(null, [Validators.required]),
      st_constitution: new FormControl(null, [Validators.required]),
      languages: new FormControl('', [Validators.required]),
      immunities: new FormControl('', [Validators.required]),
      passive_perspective: new FormControl('', [Validators.required]),
      dark_vision: new FormControl('', [Validators.required]),
    }
  );

  add_attack() {}
}
