import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from '@app/components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
})
export class App {}
