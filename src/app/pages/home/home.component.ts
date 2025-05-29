import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/container/container.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CardBuscaComponent } from "../../shared/card-busca/card-busca.component";
import { CardDepoimentoComponent } from "../../shared/card-depoimento/card-depoimento.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerComponent, BannerComponent, CardBuscaComponent, CardDepoimentoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
