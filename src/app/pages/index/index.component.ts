import { Component } from '@angular/core';
import { ActivitiesComponent } from './activities/activities.component';
import { UpcomingToursComponent } from './upcoming-tours/upcoming-tours.component';
import { EnteprisesComponent } from './enteprises/enteprises.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  imports: [ActivitiesComponent,
    UpcomingToursComponent,
    EnteprisesComponent,
    FooterComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
