import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { UpdateFormComponent } from '../update-form/update-form.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatIconModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  constructor(public dialog: MatDialog) {
  
  }
  handlOpenEditRecipeForm() {
    this.dialog.open(UpdateFormComponent)
  }
}
