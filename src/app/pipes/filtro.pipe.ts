import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    console.log("arreglo del pipe",arreglo);

    if(texto === '')
    {
      return arreglo;
    }

    //texto = texto.toLowerCase()
    console.log("textpppppoooo", texto);

    arreglo.filter(item =>
      {
        console.log(item);
        console.log(item.name);
        console.log(item.name.toLowerCase().includes(texto));
        return item.name.toLowerCase().includes(texto)
      })

    return arreglo
  }

}
