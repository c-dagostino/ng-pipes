import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
   if (value.length === 0) {
     return value;
   }
   const result = value.filter(item => {
     return (filterString === '' || item[propName] === filterString);
    })
    return result
  }

}
