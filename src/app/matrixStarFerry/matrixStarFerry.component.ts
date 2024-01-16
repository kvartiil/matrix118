import { Component } from '@angular/core';

@Component({
  selector: 'matrix-starferry',
  templateUrl: './matrixStarFerry.component.html',
  styleUrls: ['./matrixStarFerry.component.css']
})
export class StarFerryComponent {
  
  ReadMore:boolean = true
  visible:boolean = false


  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }


  public stars: boolean[] = Array(10).fill(false);

  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }
}