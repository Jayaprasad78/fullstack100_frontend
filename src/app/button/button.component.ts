import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  constructor(private http: HttpClient) {}

  sendRequest() {
    this.http.get('https://fullstack100-frontend-fpt1.vercel.app/about', { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response); // Log the response for debugging
        if (response === 'ok') {
          alert('Successful'); // Display alert if response is 'ok'
        }
      },
      (error) => {
        console.error('Error:', error); // Log error if request fails
        alert('Failed'); // Display generic failure alert
      }
    );
  
  
  
  }
  

  
}
