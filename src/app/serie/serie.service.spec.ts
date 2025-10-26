import { inject, TestBed } from '@angular/core/testing';

import { SerieService } from './serie.service';

import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('SerieService', () => {
  let service: SerieService;

  beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [SerieService]
   });
 });

 it('should ...', inject([SerieService], (service: SerieService) => {
   expect(service).toBeTruthy();
 }));
});
