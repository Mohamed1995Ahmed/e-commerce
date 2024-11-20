import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(arrayofproduct: any[], word: string): any[] {
    return arrayofproduct.filter((item) =>
      item.title.toLowerCase().includes(word.toLowerCase())
    );
  }
}
