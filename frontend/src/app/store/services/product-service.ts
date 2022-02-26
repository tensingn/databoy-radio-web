import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _url: string = 'url-to-products';
  private _products: Product[] = [];

  constructor() {}

  getProducts(): Product[] {
    return mockProducts;
  }
}

let mockProducts: Product[] = [
  {
    id: 1,
    name: 'Shirt',
    type: 'Clothing',
    price: 19.99,
    img: 'https://cdni.llbean.net/is/image/wim/224547_1_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
    releaseDate: new Date('2022-02-26'),
  },
  {
    id: 2,
    name: 'Hat',
    type: 'Acccessories',
    price: 12.99,
    img: 'https://media.kohlsimg.com/is/image/kohls/3527811_Black?wid=1200&hei=1200&op_sharpen=1',
    releaseDate: new Date('2022-02-25'),
  },
  {
    id: 3,
    name: 'Mixtape',
    type: 'Music',
    price: 9.99,
    img: 'https://hub.yamaha.com/wp-content/uploads/2021/04/mixtape-cassette-image_1400-1024x544.jpg',
    releaseDate: new Date('2022-02-24'),
  },
  {
    id: 4,
    name: 'Sweatpants',
    type: 'Clothing',
    price: 29.99,
    img: 'https://cdni.llbean.net/is/image/wim/512293_50118_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
    releaseDate: new Date('2022-02-23'),
  },
  {
    id: 5,
    name: 'Hoodie',
    type: 'Clothing',
    price: 39.99,
    img: 'https://imgprd19.hobbylobby.com/3/41/22/34122aa4291387b735fc61c2e614d6a038fd0102/350Wx350H-1385194-0320.jpg',
    releaseDate: new Date('2022-02-22'),
  },
];
