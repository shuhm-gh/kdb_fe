import {Component} from '@angular/core';

/*Angular 2 Collapse Example*/
@Component({
    selector: 'app-charts',
    template:`
                <h3>Angular 2 Collapse HTML Content</h3>
                <button type="button" class="btn btn-primary"
                        (click)="isCollapsedContent = !isCollapsedContent">Show / Hide Content (Toggle collapse)
                </button>
                <hr>
                <div [collapse]="isCollapsedContent" class="card card-block card-header">
                  <div class="well well-lg">
                   HTML content goes here !
                   <b>bold text</b> <br>
                   <span>this is a collapse example</span>
                  </div>
                </div>

                 <h3>Angular 2 Collapse HTML Content (IMAGE)</h3>
                 <button type="button" class="btn btn-primary"
                        (click)="isCollapsedImage = !isCollapsedImage">Show / Hide Image (Toggle collapse)
                </button>
                <hr>
                <div [collapse]="isCollapsedImage" class="card card-block card-header">
                        <img src="http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg" alt="BMW 1">
                </div>

             `,
})
export class SettingComponent  {
    //collapse content
    public isCollapsedContent:boolean = false;
    //collapse image (example)
    public isCollapsedImage:boolean = true;

}