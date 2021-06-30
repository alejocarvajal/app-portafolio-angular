import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
