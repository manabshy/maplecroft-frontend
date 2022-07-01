import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`country details box should have correct title`, () => {
    const scoreBox: HTMLElement = fixture.nativeElement.querySelector('.country-details');

    expect(scoreBox.textContent).toEqual(`Client's Risk Portfolio`);
  });

  it('should get score color', () => {
    const colorCode = component.getScoreColour(2.5, 'LightGray')
    expect(colorCode).toBe('#ce181f')
  })
});
