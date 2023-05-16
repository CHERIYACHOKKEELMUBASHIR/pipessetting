import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipess'
})
export class PipessPipe implements PipeTransform {

  transform(value: any, ...args: any) {
    const searchTerm=args;

    console.log("values",value,args);
    

    if(!searchTerm){

      return value;
    }
    return value.filter((item:any)=>item.company.designation.includes(searchTerm))
  }

}
