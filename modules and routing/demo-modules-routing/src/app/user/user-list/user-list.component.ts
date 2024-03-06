import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  isLoading = false
  users: User[] = []

constructor(
  private userService: UserService,
  private globalLoaderService: GlobalLoaderService){}

  ngOnDestroy(): void {
    console.log('On Destroy invoked!');
    
  }

ngOnInit(): void {
  this.fetchUsers()
}
fetchUsers(){
  //before fetch
  this.globalLoaderService.showLoader();
  //start feching
  this.userService.getUsers().subscribe(users => {
    // console.log(users);
    this.users = users;
    //after feched
    this.globalLoaderService.hideLoader();
  })
}

//   fetchUsers(){
//   this.isLoading =true;
//   setTimeout(() =>[
//   this.isLoading = false
//   ],3000)
//  }
}
