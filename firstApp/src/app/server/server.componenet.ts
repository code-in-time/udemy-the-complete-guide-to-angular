import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl : './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'my server name';
  clickMeClicked = false;
  serverArray: any = [1, 2, 3];

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 3000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
    this.clickMeClicked = true;
  }

  onUpdateServerName(event: any) {
    // console.log('this.onUpdateServerName', event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatausColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  addCustomElementHandler() {

    this.serverArray.push('1');
  }

  removeCustomElementHandler() {

    this.serverArray.pop();

    console.log(this.serverArray);
  }
}
