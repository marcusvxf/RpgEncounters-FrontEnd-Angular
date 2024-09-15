import { Component } from '@angular/core';
import { CreatureService } from '../../core/services/creature.service';
import { ICreature } from '../../shared/interfaces/creature.interface';

@Component({
  selector: 'app-creatures',
  standalone: true,
  imports: [],
  templateUrl: './creatures.component.html',
  styleUrl: './creatures.component.scss',
})
export class CreaturesComponent {
  public creatures: ICreature[] = [];

  constructor(private creature_service: CreatureService) {
    this.get_all_creatures();
  }

  get_all_creatures() {
    this.creature_service.list().subscribe((el) => {
      this.creatures = el;
      console.log(el);
    });
  }

  calc_default_hit_points(
    dice_type: number,
    dice_qtd: number,
    dice_bonus: number
  ) {
    return dice_qtd * (dice_type / 2 + 0.5) + dice_bonus;
  }
}
