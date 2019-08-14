import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  // Cambiamos el orden del símbolo de la moneda y su valor numérico
  transform(value: any, ...args: any[]): any {
    const euro = value + ' €';
    return euro;
  }

}
