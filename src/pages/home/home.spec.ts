import { HomePage } from './home';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, DebugNode } from '@angular/core';

import { IonicModule, NavController } from 'ionic-angular/index';


describe('Pagina inicial', () => {
    let de: DebugElement;
    let comp: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let nos: DebugNode[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [
                IonicModule.forRoot(HomePage)
            ],
            providers: [
                NavController
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h2'));
    });

    it('Criando instancia do componente', () => expect(comp).toBeDefined());

    it('Deve conter um elemento h2 do titulo', () => {
        fixture.detectChanges();
        const h2 = de.nativeElement;
        expect(h2.innerText).toMatch(/ionic/i,
            '<h2>Welcome to Ionic!</h2>"');
    });

    it('Deve possuir lista de carros', () => {
        fixture.detectChanges();
        expect(comp.carros.length).toBeGreaterThan(1);
    })

    it('Deve exibir os carros na tela', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('ion-item'));
        expect(de.childNodes.length).toEqual(comp.carros.length);
    })

    it('Não deve exibir mensagem na tela', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('ion-alert'));
        expect(de).not.toBeTruthy();
    })
    it('Deve exibir após o clique', () => {
        
        let button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();

        fixture.whenStable().then(() => {
            expect(comp.mostraMensagem()).toHaveBeenCalled();
        })
    })

    it('Mostra mensagem', () => {
        let button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();

        fixture.whenStable().then(() => {
            comp.mostraMensagem();
            fixture.detectChanges();
            de = fixture.debugElement.query(By.css('ion-alert'));
            expect(de).toBeTruthy();
        })
       
    })
});
