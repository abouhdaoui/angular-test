import { Component, OnInit } from '@angular/core';
import {PalindromeService} from '../../services/palindrome.service';

@Component({
  selector: 'app-list-palindrome',
  templateUrl: './list-palindrome.component.html',
  styleUrls: ['./list-palindrome.component.css']
})

export class ListPalindromeComponent implements OnInit {

  map = new Map<string, string>();

  constructor(private palindromeService: PalindromeService) {
  }

  ngOnInit(): void {
    this.palindromeService.getJSON()
      .subscribe(data => {
        if (data) {
          this.map = this.palindromeService.checkPalindromeOnJson(data);
        }
      }, error => console.log(error));
  }

}
