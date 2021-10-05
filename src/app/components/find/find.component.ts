import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title = "Find By Username"
  username: string  = '';
  public user = new User(0, '', '', '', '', '', []) 

  constructor(private userService: UserService) { }

  public findUser() {

    this.userService.findByUsername(this.username)
      .subscribe(data => this.user = data)
    
    
  }
  

}
