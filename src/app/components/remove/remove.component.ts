import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent{

  title = "Remove User"
  userId: number = 0;
  clientMessage = new ClientMessage('');

  constructor(private userService: UserService){}

  public removeUser() {

    console.log(this.userId);
    this.userService.deleteUser(this.userId);
    this.clientMessage.message = 'Successfully deleted User'

    this.clientMessage.message = `Removed User with id ${this.userId}`

  }
  
}
