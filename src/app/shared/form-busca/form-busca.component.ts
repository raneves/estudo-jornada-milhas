import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon'; // <- IMPORTANTE!
import { CardComponent } from '../card/card.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  templateUrl: './form-busca.component.html',
  styleUrls: [ './form-busca.component.scss'],
  imports: [CardComponent, MatButtonToggleModule, // <- necessário para mat-button-toggle-group
    MatIconModule, MatChipsModule]
})
export class FormBuscaComponent {

}
