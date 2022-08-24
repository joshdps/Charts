import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route : string;
  text  : string;
  img   : string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
      img {
        width  : 20px;
        height : 20px;
      }
    `
  ]
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { route: '/graphics/bars', text: 'Bars', img: 'bar-chart_2.png' },
    { route: '/graphics/double-bars', text: 'Double Bars', img: 'bar-chart.png'  },
    { route: '/graphics/donut', text: 'Donut', img: 'donut-chart_2.png'  },
    { route: '/graphics/donut-http', text: 'Donut Http', img: 'donut-chart.png'  },
    { route: '/graphics/pie-chart', text: 'Pie Chart', img: 'pie-chart.png'  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
