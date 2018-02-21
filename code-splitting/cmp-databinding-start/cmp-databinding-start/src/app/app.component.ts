import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverArray = [
    {type: 'server1', name: 'Testserver1', content: 'just a test1'},
    {type: 'server2', name: 'Testserver2', content: 'just a test2'}
  ];


  onServerAdded(eventData: {serverName: string, serverContent: string}) {
    this.serverArray.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

  onBluePrintAdded(eventData: {serverName: string, serverContent: string}) {
    this.serverArray.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

}
