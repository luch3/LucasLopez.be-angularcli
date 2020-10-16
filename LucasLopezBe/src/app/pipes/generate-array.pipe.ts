import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateArray'
})
export class GenerateArrayPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(value: number, fillInValue: number): number[]{
    const array = [];
    for (let i = 0; i < value; i++) {
      array.push(
        fillInValue ?? Math.random()
      );
    }
    return array;
  }

}
