import { Pipe, PipeTransform } from '@angular/core';
import { MES_CONSTANTES } from 'src/app/config/constantes.config';

@Pipe({
  name: 'defaultImage',
  pure: true
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    return path.trim()? path : MES_CONSTANTES.defaultImage;
  }

}
