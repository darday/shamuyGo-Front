import { NgModule } from '@angular/core';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-upcoming-tours',
  imports: [HttpClientModule,
    CommonModule,
  ],
  templateUrl: './upcoming-tours.component.html',
  styleUrl: './upcoming-tours.component.css'
})
export class UpcomingToursComponent {

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.getData();
  }

  tours: { shamuy_tours_id: number, 
    tour_name: string, 
    tour_destiny: string, 
    img_1: string, 
    img_2: string, 
    enterprise_name: string, 
    type: string, 
    departure_date: string }[] = [];

  getData() {
    const url = `${environment.apiUrl}shamuy-tour-list`;
  
    this.http.get<any[]>(url).subscribe(response => {
      // Asignar la respuesta (o mapearla) a `tours`
      this.tours = response.map(item => ({
        shamuy_tours_id: item.shamuy_tours_id,
        tour_name:item.tour_name ,
        tour_destiny:item.tour_destiny ,
        img_1: item.img_1,
        img_2: item.img_2,
        enterprise_name: item.enterprise_name,
        type: item.type,
        departure_date: item.departure_date,
      }));
      console.log(this.tours); // Verifica los datos en la consola
    }, error => {
      console.error('Error:', error);
    });
  }


  scroll(direction: string) {
    const carouselTour = document.querySelector('.carouselTour') as HTMLElement;

    const scrollAmount = carouselTour.offsetWidth / 2; // Desplaza la mitad del ancho del carrusel
    if (direction === 'leftTour') {
      carouselTour.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselTour.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

}
