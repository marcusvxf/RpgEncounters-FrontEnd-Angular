import { Component } from '@angular/core';
import { CreatureService } from '../../core/services/creature.service';
import { ICreature } from '../../shared/interfaces/creature.interface';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CreateCreatureComponent } from '../../shared/components/dialogs/create-creature/create-creature.component';

@Component({
  selector: 'app-creatures',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './creatures.component.html',
  styleUrl: './creatures.component.scss',
})
export class CreaturesComponent {
  public creatures: ICreature[] = [];
  private page: number = 1;

  dialog_ref!: MatDialogRef<CreateCreatureComponent>;

  constructor(
    private creature_service: CreatureService,
    readonly dialog: MatDialog
  ) {
    this.get_all_creatures();
  }

  open_create_creature_dialog() {
    this.dialog_ref = this.dialog.open(CreateCreatureComponent, {
      height: '80vh',
      width: '60vw',
      maxWidth: '100%',
      maxHeight: '100%',
    });

    this.dialog_ref.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
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
