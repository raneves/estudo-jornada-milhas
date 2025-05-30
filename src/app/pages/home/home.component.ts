import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/container/container.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CardBuscaComponent } from "../../shared/card-busca/card-busca.component";
import { CardDepoimentoComponent } from "../../shared/card-depoimento/card-depoimento.component";
import { FormBuscaComponent } from "../../shared/form-busca/form-busca.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerComponent, BannerComponent, CardBuscaComponent, CardDepoimentoComponent, FormBuscaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
