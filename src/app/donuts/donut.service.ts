import { Donut } from './donut.module';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class DonutService {
  donutsChanged = new Subject<Donut[]>();

  private donuts: Donut[] = [
    new Donut(
      'Kinder',
      'Dupla doza mlečne čokolade, posuta seckanim lešnikom, ispunjena sočnom kinder belom čokoladom i kinder buenom u sredini.',
      'Super-ukusni Kinder - sjajno!',
      'https://slatkoteka.rs/wp-content/uploads/2017/12/Kinder-1-320x320.png',
    ),
    new Donut('Kapri',
      'Mlečna čokolada, posuta belim čokoladnim mrvicama, punjena filom od vanile i šumskog voća, malinom i nanom u sredini.',
      'Vocna bomba!',
      'https://slatkoteka.rs/wp-content/uploads/2017/12/XXL-Kapri1-320x320.png',
    ),
    new Donut('Bounty',
      'Prelivena mlečnom čokoladom, posuta najfinijim kokosom,punjena crnom čokoladom i komadićem bounty čokoladice.',
      'Savršena snežna krofna!',
      'https://slatkoteka.rs/wp-content/uploads/2017/12/Bounty1.png',
    ),
    new Donut('Double trouble',
      'Ovoj nevolji nećete moći da odolite! Kako vam zvuči krofna sa belim kinder filom, nugat kremom, mlečnom čokolada i kit-kat-om? Sjajno zar ne?',
      'Čokoladna nevolja!',
      'https://slatkoteka.rs/wp-content/uploads/2017/12/56_0002_13.png',
    ),
    new Donut('Krofne po želji',
      'Želiš da iznenadiš najbliže slatkom porukom za posebnu priliku? Šapni nam dve, tri specijalne reči, a mi ćemo se potruditi da iznenađenje bude nezaboravno!',
      'Personalizovana krofna, samo za vaše najdraže!',
      'https://slatkoteka.rs/wp-content/uploads/2017/12/Specijalna-sa-natpisom.png',
    ),
    new Donut('Nugatina',
      'Nugatina,medena i fina, prelivena mlečnom čokoladom, posuta lešnicima sa nugat filom, u sredini i nugat čokoladnom kockicom.',
      'Volite lešnik? Ovo je prava krofna za vas!',
      'https://slatkoteka.rs/wp-content/uploads/2017/12/Nugatina.png',
    )
  ];

  getDonuts() {
    return this.donuts.slice();
  }

  getDonut(index: number) {
    return this.donuts[index];
  }

}
