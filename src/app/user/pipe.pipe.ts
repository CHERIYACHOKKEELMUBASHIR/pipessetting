import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, ...args: any) {
    const searchTerm=args;

    console.log("values",value,args);
    

    if(!searchTerm){

      return value;
    }
    return value.filter((item:any)=>item.name.includes(searchTerm))
  }

}
