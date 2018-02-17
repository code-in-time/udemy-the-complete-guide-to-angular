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

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 3000);
  }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}
