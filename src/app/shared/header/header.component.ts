import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',  // corrigir aqui
  standalone: true,
  templateUrl: './header.component.html',
  imports: [MatToolbarModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
