import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-realisations',
  templateUrl: './cv-realisations.component.html',
  styleUrls: ['./cv-realisations.component.css']
})
export class CvRealisationsComponent implements OnInit {
  realisations = [{
    image: '/assets/rea/cvAngular.png',
    titre: 'Mon CV',
    description: 'J\'ai réalisé ce site web afin de m\'aider dans ma recherche de stage et de m\'exercer avec le framework Angular.',
    langages: 'Angular, HTML, CSS et TS'
  }, {
    image: '/assets/rea/clueHunter.png',
    titre: 'ClueHunter',
    description: 'ClueHunter est un site web que j\'ai réalisé dans le cadre de mon cours de Technologie Internet. Le but de ce site est de trouver des "papiers" qui possèdent un QR code afin de les synchroniser avec son compte. L\'utilisateur qui scan un papier se voit redirigé vers la page du papier contenant des informations sur le lieu où le papier a été trouvé. Ce principe pourrait avoir une chouette application afin de créer des parcours touristiques.',
    langages: 'HTML, CSS, JS, SQL et PHP (L\'app utilise des fonctions de géolocalisation)'
  }, {
    image: '/assets/rea/weeMod.png',
    titre: 'Wee',
    description: 'Wee est un jeu que nous avons réalisé, 2 étudiants et moi, dans le cadre de notre cours de Projet à la HELHa à Mons en bloc 2. Ce jeu s\'inspire du 4 à la suite, manche du célèbre jeu télévisé "Question pour un champion". Je me suis beaucoup investi dans ce projet et notamment j\'ai mis en place un mode multijoueur, local et en ligne, permettant aux joueurs de jouer tour par tour et de comparer leur score à la fin.',
    langages: 'Java, JSon, XML et Reseau'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
