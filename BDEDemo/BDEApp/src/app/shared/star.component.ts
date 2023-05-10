import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  _rating = 0;

  @Input()
  get rating() {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
    this.ratingChange.emit(value);
  }

  starWidth = 0;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(): void {
    this.starWidth = 15 * this.rating;
  }

  onClick(e: MouseEvent): void {
    console.log(e);
    this.rating = e.offsetX / 15;
    // this.ratingChange.emit(this.rating);
  }
}
