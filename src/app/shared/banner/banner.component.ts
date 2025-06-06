import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
   @Input() src: string = '';
   @Input() alt: string = '';
}
