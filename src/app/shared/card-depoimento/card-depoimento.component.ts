import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss'],
  imports: [MatCardModule]
})
export class CardDepoimentoComponent {
  depoimento = `Recomendo fortemente a agência de viagens Jornada. Serviço personalizado e de alta qualidade.`;
  autoria = 'Romulo A. Neves';
}
