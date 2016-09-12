/**
 * Created by Ishaq17 on 2016-07-10.
 */
import {Component, ElementRef, AfterViewInit} from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'my-jquery',
    template: ``
})

export class JQueryComponent implements AfterViewInit{
    constructor(private _elRef: ElementRef) {}

    ngAfterViewInit()  {
        jQuery(this._elRef.nativeElement).linerPlayer({
            firstPlaying: 0,
            autoplay: false,
            shuffle: false,
            veryThin: false,
            slideAlbumsName: false,
            nowplaying2title: true,
            roundedCorners: false,
            accentColor:"#008DDE",
            pluginPath: "js", // <<< IMPORTANT! - Change this to your path to the plugin folder AND remove first '//' characters
            playlist: [

            ]
        });
    }

}