import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import {toSignal} from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    CommonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  encapsulation: ViewEncapsulation.None, // Desactiva encapsulación para este componente

})
export class NavBarComponent {

  readonly hideRequiredControl = new FormControl(false);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);

  protected readonly hideRequired = toSignal(this.hideRequiredControl.valueChanges);
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    { initialValue: 'auto' },
  );

}
