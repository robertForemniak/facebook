import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any): string | null {
    const date = new Date(value);
    if(isNaN.call(null,date)){
      return null;
    }
    const result = date.toLocaleString('pl-PL',{
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    return result;
  }

}
