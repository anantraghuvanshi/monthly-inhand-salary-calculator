import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AboutComponent } from './about.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AboutComponent, HeaderComponent, FooterComponent],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch collaborators', () => {
    const mockCollaborators = [
      { login: 'collaborator1' },
      { login: 'collaborator2' },
      { login: 'collaborator3' },
    ];

    component.fetchCollaborators().then(() => {
      expect(component.collaborators).toEqual([
        'collaborator1',
        'collaborator2',
        'collaborator3',
      ]);
    });

    const req = httpTestingController.expectOne(
      'https://api.github.com/repos/anantraghuvanshi/monthly-inhand-salary-calculator/collaborators'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockCollaborators);
  });
});
