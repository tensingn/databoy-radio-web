import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    let minutes: number = Math.floor(value / 60);
    let seconds: number = Math.ceil(value % 60);
    let formattedSeconds: string =
      seconds >= 10 ? seconds.toString() : `0${seconds}`;
    return `${minutes}:${formattedSeconds}`;
  }
}
