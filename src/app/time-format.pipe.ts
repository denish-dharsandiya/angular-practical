import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(isoDateTime: string): string {
    const date = new Date(isoDateTime);

    // Get hours and minutes
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    // Convert hours to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format

    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
    return formattedTime;
  }
}
