import {Pipe, PipeTransform} from '@angular/core';
import {SamImageService} from '../service/sam-image.service';

@Pipe({
    name: 'makeAttachPathByStream'
})
export class MakeAttachPathByStreamPipe implements PipeTransform {

    constructor(
        private samImageService: SamImageService
    ) {}

    // transform(value: unknown, ...args: unknown[]): unknown {
    transform(value: any, args?: any): unknown {
        return this.samImageService.makeAttachPathByStream(value, args);
    }

}
