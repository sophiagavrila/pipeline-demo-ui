import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = "All Users";
  public users: User[] = [];
  public clientMessage: ClientMessage = new ClientMessage('Sorry, no users to display');


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // we will set the heroes array = to all of the heroes fetched from the server
    this.findAllUsersFromService();
  }
  
  public findAllUsersFromService(): void {
    // in this method we call on our service to fetch the heroes array and set it equal to 
    // our heroes property
    this.userService.findAllUsers().subscribe(data => this.users = data)
  }

}
