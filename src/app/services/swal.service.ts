import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FlexiToastIconType, FlexiToastService } from 'flexi-toast';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor(
    private toast: FlexiToastService
  ) { }

  callToast(text: string = "Operations is successful", icon: FlexiToastIconType = "success") {
    const title = this.toTitleCase(icon);
    this.toast.showToast(title, text, icon);
  }

  callSwal(title: string, text: string, callBack: () => void, confirmButtonText: string = "Delete", cancelButtonText: string = "Cancel") {
    this.toast.showSwal(title, text, () => callBack(), confirmButtonText, cancelButtonText);
  }

  toTitleCase(str: string) {
    return str
      .split(' ') // Metni boşluklardan ayırarak kelimelere bölüyoruz.
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Her kelimenin ilk harfini büyük yapıyoruz.
      .join(' '); // Kelimeleri tekrar birleştiriyoruz.
  }
}