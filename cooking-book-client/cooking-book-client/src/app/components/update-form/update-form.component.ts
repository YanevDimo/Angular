import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatRadioModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss'
})
export class UpdateFormComponent {
  recipeItem: any = {
    title: "",
    description: "",
    foodType: "",
    image:""
  }
  onSubmit() {
    console.log("values",this.recipeItem);
  }
}
