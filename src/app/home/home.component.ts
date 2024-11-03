import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { PostsComponent } from "../posts/posts.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,PostsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Home Page';
}
