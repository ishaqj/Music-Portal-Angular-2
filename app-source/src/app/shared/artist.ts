/**
 * Created by Ishaq17 on 2016-07-28.
 */
import {Genre} from './genre.interface';

export class Artist {
  constructor(public name:string, public bio:string, public image:string, public genre: Genre[]) {}
}
