import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {

  base: number;
  altura: number;
  area: number;

  calcularAreaTriangulo() {
    // ===== calculate area of triangle =====
    this.area = (this.base * this.altura) / 2;
  }

  ngOnInit() {
  }

}



