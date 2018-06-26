import { carro } from './carro';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { CarrosproviderProvider } from './../../providers/carrosprovider/carrosprovider';
import { HomePage } from './home';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, DebugNode } from '@angular/core';
import 'rxjs/Rx';
import { IonicModule, NavController } from 'ionic-angular/index';


describe('Pagina inicial', () => {
    let de: DebugElement;
    let comp: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let nos: DebugNode[];
    let _service: CarrosproviderProvider;
    let carros: carro[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [
                HttpClientModule,
                IonicModule.forRoot(HomePage)
            ],
            providers: [
                NavController,
                CarrosproviderProvider
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h2'));
        _service = comp._carrosProvider;
    });

    it('Criando instancia do componente', () => expect(comp).toBeDefined());

    it('Deve conter um elemento h2 do titulo', () => {
        fixture.detectChanges();
        const h2 = de.nativeElement;
        expect(h2.innerText).toMatch(/ionic/i,
            '<h2>Welcome to Ionic!</h2>"');
    });




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



    it('Deve possuir lista de carros', () => {
        fixture.detectChanges();
        _service.listaCarros().subscribe((res) => {
            comp.carros = res;
            expect(comp.carros.length).toBe(res.length);
        });

    })

    it('Deve exibir os carros na tela', async((done) => {
        fixture.detectChanges();
        _service.listaCarros().subscribe((res) => {
            comp.carros = res;
            fixture.detectChanges();
            expect(comp.carros.length).toBe(res.length);
        }); 
    }))

});
