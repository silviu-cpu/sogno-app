import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  PostMessage: any;

  constructor(private builder: FormBuilder, private contact: ContactService) {
    
   }

   onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe((response: any) => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    }, (error: { responseText: any; }) => {
    console.warn(error.responseText)
    console.log({ error })
    })
}
}
