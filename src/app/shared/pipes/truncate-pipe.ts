import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    limit: number = 20;
    trail: string = '...'
    transform(value: string, args: string[]): string {
        if (args) {
            this.limit = args.length > 0 ? parseInt(args[0], 10) : 10;
            this.trail = args.length > 1 ? args[1] : '...';
        }
        return value.length > this.limit ? value.substring(0, this.limit) + this.trail : value;
    }
}