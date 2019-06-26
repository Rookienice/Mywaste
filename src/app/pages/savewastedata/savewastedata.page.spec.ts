import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavewastedataPage } from './savewastedata.page';

describe('SavewastedataPage', () => {
  let component: SavewastedataPage;
  let fixture: ComponentFixture<SavewastedataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavewastedataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavewastedataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
