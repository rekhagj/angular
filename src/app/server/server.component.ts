import { Component,OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online {
    background-color: gray;
  }
  ` ]
})
export class ServerComponent implements OnInit  {
//erverport:number=200;
serverPort=200;
serverName :string='Family';
allowNewServer = false;
server = 'Server not created'
isServer = 'offline';
serverCreation = 'Test';
isServerCreated = false;
servers = ['test','test1','test2']

constructor(){
setTimeout(()=>{
this.allowNewServer = true;
},2000)
this.isServer = Math.random() > 0.5 ? 'online' : 'offline';

}
getColor(){
  return this.isServer === 'offline' ? 'red' : 'green' ;
}

onCreateServer(){
  this.isServerCreated = true;
  this.servers.push(this.server)
  this.server = ' Server created! The name of the server is ' + this.serverCreation
}

onEnterName(event: Event){
  this.serverCreation = (<HTMLInputElement>event.target).value
}
 ngOnInit(){

 }



}
