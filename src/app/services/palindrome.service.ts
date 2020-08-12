import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PalindromeService {
  constructor(private http: HttpClient) {}

  private jsonPath = '../../assets/flux.json';
  map = new Map<string, string>();

  isPalindrome(path): string{
    let i = 0;
    const lengthPath: number = path.length - 1;
    let isSame = 'OK';

    while ( i < lengthPath / 2 && isSame){
      if (path.charAt(i) === path.charAt(lengthPath - i)) {
        isSame = 'OK';
      }
      else {
        isSame = 'KO';
      }
      i = i + 1;
    }
    return isSame;
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonPath);
  }

  checkPalindromeOnJson(data): Map<string, string> {
    for (const d of (data as any)) {
      this.map.set(d.label, this.isPalindrome(d.label));
    }
    return this.map;
  }

}
