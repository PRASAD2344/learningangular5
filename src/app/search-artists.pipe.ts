import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData: any[], pipeModifier: string): any[] {
    return pipeData.filter((eachItem: any) => {
      return(
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['shortName'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
