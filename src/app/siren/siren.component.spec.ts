// siren.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SirenComponent } from './siren.component';

describe('SirenComponent', () => {
  let component: SirenComponent;
  let fixture: ComponentFixture<SirenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SirenComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(SirenComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initially have an empty siren and isValidSiren set to false', () => {
    expect(component.siren).toEqual('');
    expect(component.isValidSiren).toBeFalsy();
  });

  it('should validate a valid SIREN number', () => {
    component.siren = '477550370';
    component.validateSiren();
    expect(component.isValidSiren).toBeTruthy();
  });

  it('should not validate an invalid SIREN number', () => {
    component.siren = '12345678'; 
    component.validateSiren();
    expect(component.isValidSiren).toBeFalsy();
  });

  it('should not validate when the SIREN input is empty', () => {
    component.siren = '';
    component.validateSiren();
    expect(component.isValidSiren).toBeFalsy();
  });
});
