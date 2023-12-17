import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-trans-history',
  templateUrl: './trans-history.component.html',
  styleUrls: ['./trans-history.component.scss']
})
export class TransHistoryComponent implements OnInit {
  transactions: any;
  selectedTransaction: any;
  isPopupOpen = false;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getData().subscribe((data: any) => {
      this.transactions = data.transactions.slice(0, 5);
    }); 
  }
  formatDate(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  openPopup(name: string, type: string) {
    this.selectedTransaction = { name, type };
    this.isPopupOpen = true;
  }
  
  closePopup() {
    this.isPopupOpen = false;
  }
}
