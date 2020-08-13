import { Component, OnInit } from '@angular/core';
import {PalindromeService} from '../../services/palindrome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css'],

  providers: [PalindromeService]
})
export class PalindromeComponent implements OnInit {
  path: string;
  result: string;

  constructor(private router: Router, private palindromeService: PalindromeService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((url: any) => {
      if (url.url) {
        this.path = url.url.split('/start/')[1];
        if (this.path) {
          this.result = this.palindromeService.isPalindrome(this.path);
        }
      }
    }, error => console.log(error));
  }


}
