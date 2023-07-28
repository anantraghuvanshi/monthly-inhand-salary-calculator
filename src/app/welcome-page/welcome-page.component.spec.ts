import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { WelcomeComponent } from './welcome-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'salary-calculator', redirectTo: '' },
        ]),
      ],
      declarations: [WelcomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should patch userNameForm with userName from localStorage on ngOnInit', fakeAsync(() => {
    localStorage.setItem('userName', 'John');
    component.ngOnInit();
    tick(2500);
    expect(component.userNameForm.value).toEqual({ userName: 'John' });
    localStorage.removeItem('userName');
  }));

  it('should not patch userNameForm if no userName in localStorage on ngOnInit', fakeAsync(() => {
    localStorage.removeItem('userName');
    component.ngOnInit();
    tick(2500);
    expect(component.userNameForm.value).toEqual({ userName: 'Guest' });
  }));
  it('should add class visible to userInput and socialsContainer on ngOnInit', fakeAsync(() => {
    const classListSpy = jasmine.createSpyObj('classList', ['add']);
    spyOn(document, 'getElementById').and.callFake((id) => {
      return { classList: classListSpy } as any;
    });
    component.ngOnInit();
    tick(2500);
    expect(classListSpy.add).toHaveBeenCalledWith('visible');
  }));

  it('should set local storage and navigate when goToSalaryCalculator is called with a value', fakeAsync(() => {
    spyOn(localStorage, 'setItem');
    spyOn(component['router'], 'navigate');
    component.userNameForm.get('userName')?.setValue('John');
    component.goToSalaryCalculator();
    tick();
    expect(localStorage.setItem).toHaveBeenCalledWith('userName', 'John');
    expect(component['router'].navigate).toHaveBeenCalledWith([
      'salary-calculator',
    ]);
  }));

  it('should not set local storage or navigate when goToSalaryCalculator is called without a value', fakeAsync(() => {
    spyOn(localStorage, 'setItem');
    spyOn(component['router'], 'navigate');
    component.userNameForm.get('userName')?.setValue('');
    component.goToSalaryCalculator();
    tick();
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(component['router'].navigate).not.toHaveBeenCalled();
  }));
});
