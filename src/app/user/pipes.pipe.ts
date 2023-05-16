import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {
  transform(value: any, ...args: any) {
    const searchTerm=args;

    console.log("values",value,args);
    

    if(!searchTerm){

      return value;
    }
    return value.filter((item:any)=>item.company.name.includes(searchTerm))
  }

}
