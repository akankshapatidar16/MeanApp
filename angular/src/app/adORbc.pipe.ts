/*import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name: 'suffixADorBC'
})

export class ADorBCpipe implements PipeTransform{
    transform(value: any, ...args: any[]){
        let year = value
        console.log("year=",value)
        if(year < 0) year = -year + "BC"
        else year = year + "AD"
        return year
    }

    constructor(){

    }
}*/