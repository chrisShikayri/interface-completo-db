import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'curso para hablar japones ', 
      price: 45.25, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/8Tvf.gif'
    },
    { 
      name: 'como dejar de ser tan guapo ', 
      price: 195.22, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/Mv.gif'
    },
    { 
      name: 'estas viviedo un isekay?', 
      price: 185.25, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://i.gifer.com/Wtpp.gif'
    },
    { 
      name: 'los gatos son los nuevos en dominar el mundo? ', 
      price: 175.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/ZLnU.gif'
    },
    { 
      name: 'El manga o Anime? ', 
      price: 8545.36, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://i.gifer.com/6mh.gif'
    },
    { 
      name: 'Estas en tus viviendo un romkom?', 
      price: 568.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/2iFb.gif'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
