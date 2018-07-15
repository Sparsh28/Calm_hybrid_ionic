import { Component } from '@angular/core';

import { SleepPage } from '../sleep/sleep';
import { MeditatePage } from '../meditate/meditate';
import { HomePage } from '../home/home';
import { MusicPage } from '../music/music';
import { MasterclassPage } from '../masterclass/masterclass';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SleepPage;
  tab3Root = MeditatePage;
  tab4Root = MusicPage;
  tab5Root = MasterclassPage;

  constructor() {

  }
}
