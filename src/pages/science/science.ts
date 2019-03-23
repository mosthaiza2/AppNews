import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {
  Sciencenews:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://www.reddit.com/r/Science/new.json?limit=20')
    .map(res => res.json()).subscribe(data => {this.Sciencenews = data.data.children;});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SciencePage');
  }

}
