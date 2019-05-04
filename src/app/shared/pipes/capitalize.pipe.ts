import { Pipe,PipeTransform } from "@angular/core";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({name:'capaitalize'})

export class CapitalizePipe implements PipeTransform{
    transform(value:any){
    return typeof value==='string' && value.charAt(0).toUpperCase()+value.slice(1)||value;
}
}