import { NgModule } from '@angular/core';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enteprises',
  imports: [HttpClientModule,
    CommonModule,],
  templateUrl: './enteprises.component.html',
  styleUrl: './enteprises.component.css'
})
export class EnteprisesComponent {

  environment = environment;

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.getData();
  }

  tours: { enterprise_id: number, 
    enterprise_code: string, 
    enterprise_name: string, 
    img_logo: string }[] = [];

  getData() {
    const url = `${environment.apiUrl}enterprise-list`;
  
    this.http.get<any[]>(url).subscribe(response => {
      // Asignar la respuesta (o mapearla) a `tours`
      this.tours = response.map(item => ({
        enterprise_id: item.enterprise_id,
        enterprise_code:item.enterprise_code ,
        enterprise_name:item.enterprise_name ,
        img_logo: item.img_logo
       
      }));
      console.log(this.tours); // Verifica los datos en la consola
    }, error => {
      console.error('Error:', error);
    });
  }


  scroll(direction: string) {
    const carouselEnterprise = document.querySelector('.carouselEnterprise') as HTMLElement;

    const scrollAmount = carouselEnterprise.offsetWidth / 2; // Desplaza la mitad del ancho del carrusel
    if (direction === 'leftEnterprise') {
      carouselEnterprise.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselEnterprise.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }


}
