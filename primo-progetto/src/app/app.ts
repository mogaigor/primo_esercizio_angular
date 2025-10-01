import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ciao } from './ciao/ciao';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,Ciao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primo-progetto');
}
