import { UserService } from './../../services/user.service';
import { Address } from './../../models/user';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { addSyntheticLeadingComment } from 'typescript';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User';

  /**
   * This is because TypeScript 2.7 includes a strict class checking
   * where all the properties should be initialized in the constructor. 
   * A workaround is to add the ! as a postfix to the variable name:
   **/
  public user = new User(0, '', '', '', '', '', [])

  public address = new Address('', '', '', '')
  
  public clientMessage = new ClientMessage('');

  // constructor injection for UserService
  constructor(private userService: UserService) { }

  public registerUserFromService(): void {

    this.user.addresses.push(this.address);

    // TODO: Resolve information received.
    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully inserted ${data.firstName}`,
        error => this.clientMessage.message = `Something went wrong. Error: ${error}`
      );
  }
}