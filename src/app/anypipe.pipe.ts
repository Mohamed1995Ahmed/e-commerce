import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anypipe',
  standalone: true,
})
export class AnypipePipe implements PipeTransform {
  transform(text: string, limit: number): string {
    return text.split(' ', limit).join(' ');
  }
}
