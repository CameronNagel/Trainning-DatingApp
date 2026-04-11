import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private messageService = inject(MessageService);


  showSuccessToast(message: string, summary = 'Success') {
    this.messageService.add({ severity: 'success', summary, detail: message });
  }

  showErrorToast(message: string, summary = 'Error') {
    this.messageService.add({ severity: 'error', summary, detail: message });
  }

  showInfoToast(message: string, summary = 'Info') {
    this.messageService.add({ severity: 'info', summary, detail: message });
  }

  showWarnToast(message: string, summary = 'Warning') {
    this.messageService.add({ severity: 'warn', summary, detail: message });
  }

  clear() {
    this.messageService.clear();
  }


  
}
