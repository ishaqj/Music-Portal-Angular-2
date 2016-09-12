/**
 * Created by Ishaq17 on 2016-07-04.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "https://67.222.135.20/~sallu/";
    public ApiUrl: string = "api/";
    public ServerWithApiUrl: string  = this.Server + this.ApiUrl;
}
