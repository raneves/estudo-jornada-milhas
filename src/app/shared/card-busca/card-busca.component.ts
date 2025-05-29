import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
  imports: [MatCardModule, MatButtonModule]
})
export class CardBuscaComponent {}

