import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-activities',
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {

  images = [
    'assets/index/Camping.png',
    'assets/index/Cumbres.png',
    'assets/index/fullday.png',
    'assets/index/Otras.png',
  ];

  scroll(direction: string) {
    const carousel = document.querySelector('.carousel') as HTMLElement;

    const scrollAmount = carousel.offsetWidth / 2; // Desplaza la mitad del ancho del carrusel
    if (direction === 'left') {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

}
