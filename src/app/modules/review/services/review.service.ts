import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review.interface';

@Injectable()
export class ReviewService {
  constructor(private httpClient: HttpClient) {}

  public sendReviewData(data: Review): Observable<Review> {
    return this.httpClient.post<Review>(
      'https://flkup-6c8a5-default-rtdb.firebaseio.com/review.json',
      data
    );
  }
}
