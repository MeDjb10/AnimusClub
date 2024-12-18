import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailChanger'
})
export class EmailChangerPipe implements PipeTransform {
  transform(email: string): string {
    if (!email) {
      return '';
    }
    const [username, part2] = email.split('@');
    const part1 = username.substring(0, Math.ceil(username.length / 2)) + '*'.repeat(Math.floor(username.length / 2));

    return part1 + '@' + part2;
  }
}
