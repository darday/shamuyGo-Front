import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './pages/index/index.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavBarComponent,
    IndexComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shamuy-Front';
}
