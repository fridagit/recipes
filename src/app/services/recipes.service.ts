import { Observable, BehaviorSubject } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { Injectable, OnInit } from '@angular/core';
import {Recipe} from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipesService  {
  /*recipes: Recipe[] = [
    {
      name: 'Flygande Jacob',
      image: 'https://img.koket.se/media/flygande-jacob.jpg',
      url: 'https://www.koket.se/flygande-jacob-med-notter',
      description: '# Sätt ugnen på 225 grader. \nTa loss det grillade kycklingköttet från benen. ' +
      'Skär köttet i mindre bitar. Lägg bitarna i smord ugnssäker form. Krydda med salladskryddan. ' +
      'Skala och skiva bananerna. Lägg bananskivorna ovanpå kycklingen.',
      categories: ['Kyckling', 'Nötter'],
      ingredients: [{
        name: 'färdiggrillad kyckling', number: '1'
      }, {name: 'bananer', number: '2'}]
    },
    {
      name: 'Köttbullar med potatismos',
      image: 'https://img.koket.se/media/kottbullar-pelle-johanssons-recept2.jpg',
      url: 'https://www.koket.se/lattlagat/pelle-johansson/kottbullar--pelle-johanssons-recept/',
      description: '',
      categories: ['Färs', 'Potatis'],
      ingredients: []
    },
    {
      name: 'Currykyckling med krämig purjopotatis',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=343997&' +
      'receptname=Currystekt%20kyckling%20med%20kr%E4mig%20purjol%F6kspotatis',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {
      name: 'Kasslergratäng med broccoli och gula morötter',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=410745',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {
      name: 'Baconlindad ostfylld kycklingfilé',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=366951',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {
      name: 'Ostfylld köttfärsbiff',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=352432',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {
      name: 'Tomat- och ostfylld lövbiff - Serveras med pepparsås, klyftpotatis och grönsallad',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=318361',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {
      name: 'Kasslergratäng med paprika',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=426176',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {name: 'Fina fiskgrytan', url: 'http://www.arla.se/Default.aspx?id=17653&RecipeID=18216', categories: [], date: new Date('2006-02-26')},
    {name: 'Thailax', url: 'http://www.arla.se/Default.aspx?id=17653&RecipeID=18218', categories: [], date: new Date('2006-02-26')},
    {
      name: 'Yoghurtmarinerade kycklingfiléer',
      url: 'http://www.arla.se/Default.aspx?id=17653&RecipeID=15235',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {
      name: 'Thailändsk kalkonfilé',
      url: 'http://www.arla.se/Default.aspx?id=17653&RecipeID=14930',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {
      name: 'Biffwok med asiatisk sås',
      url: 'http://www.arla.se/Default.aspx?id=17653&RecipeID=14870',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {name: 'Blodkorv med skivad,stekt potatis och lingonsylt', url: '', categories: [], date: new Date('2006-02-26')},
    {name: 'Pytt i Panna på fintärnad lövbiff, potatis och lök med stekt ägg', url: '', categories: [], date: new Date('2006-02-26')},
    {
      name: 'Orientalisk gryta i woken',
      url: 'http://www.matprat.com/SE-New/recipe.asp?id=619191',
      categories: [],
      date: new Date('2006-02-26'),
    },
    {name: 'Älggryta med kantareller och kokt potatis', url: '', categories: [], date: new Date('2006-03-05')},
    {name: 'Spaghetti och köttfärssås', url: '', categories: [], date: new Date('2006-03-09')},
    {
      name: 'Kalkonwok med paprika, kokosmjölk, bambuskott och purjopasta. Serveras med risnudlar.',
      url: '',
      categories: [],
      date: new Date('2006-03-09'),
    },
    {name: 'Grillad kyckling', url: '', categories: [], date: new Date('2006-03-09')},
    {
      name: 'Fiskgratäng med lax och spenat',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=503962',
      categories: [],
      date: new Date('2006-04-09'),
    },
    {
      name: 'Potatisgratäng med färstäcke',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=388768',
      categories: [],
      date: new Date('2006-04-09'),
    },
    {
      name: 'Persisk risotto med rispasta och bulgur',
      url: 'http://www.ica.se/FrontServlet?s=mat_recept&state=recept&receptid=515908',
      categories: [],
      date: new Date('2006-04-09'),
    },
    {
      name: 'Chili con carne (LCHF)',
      url: 'http://www.matklubben.se/recept/lchf_%E2%80%93_chili_con_carne_58507.html',
      categories: [],
      date: new Date('2010-10-20'),
    },
    {
      name: 'Chili con carne',
      url: 'http://airamsmat.webblogg.se/2008/december/lchf-chili-con-carne.html',
      categories: [],
      date: new Date('2010-10-20'),
    },
    {
      name: 'Kassler och spenatgratäng',
      url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=434',
      categories: [],
      date: new Date('2010-10-20'),
    },
    {name: 'Fläskfilé med baconsås', url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=539', categories: [], date: new Date('2010-10-20')},
    {name: 'Fiskgryta', url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=239', categories: [], date: new Date('2010-10-20')},
    {
      name: 'Baconlindade kycklingfiléer med blomkålsmos',
      url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=810',
      categories: [],
      date: new Date('2010-10-20'),
    },
    {
      name: 'Hasselbackschampinjoner',
      url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=676',
      categories: [],
      date: new Date('2010-10-20'),
    },
    {name: 'Vitlökssås', url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=857', categories: [], date: new Date('2010-10-20')},
    {name: 'Kålpudding', url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=122', categories: [], date: new Date('2010-10-20')},
    {name: 'Pizza', url: 'http://www.semperglutenfritt.se/glutenfria-recept/pizzabottnar', categories: [], date: new Date('2010-10-20')},
    {
      name: 'Broccolipaj',
      url: 'http://www.semperglutenfritt.se/glutenfria-recept/adelost-och-broccolipaj?vdt=recipes_popular%7Cblock_2',
      categories: [],
      date: new Date('2010-10-20'),
    },
    {
      name: 'Pasta med mozzarella och basilika',
      url: 'http://www.tasteline.com/Recept/pasta_med_mozzarella_och_basilika',
      categories: [],
      date: new Date('2010-10-24'),
    },
    {
      name: 'Kycklingfilé med champinjoner i gräddig sås',
      url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=651',
      categories: [],
      date: new Date('2010-10-24'),
      description: 'Servera med brysselkål;'
    }
    ,
    {
      name: 'Fläskpannkaka (LCHF)',
      url: 'http://airamsmat.webblogg.se/2008/september/pa-g-2.html',
      categories: [],
      date: new Date('2010-10-24'),
    },
    {name: 'Thaikyckling med ris', url: '', categories: [], date: new Date('2010-10-24')},
    {
      name: 'Stekt ris med kycklingklubbor',
      url: '',
      categories: [],
      date: new Date('2010-10-24'),
      description: 'Stek färdigkokt ris i panna med rikligt med smör och olja.;Rör om hela tiden för att inte det ska fastna.;' +
      'Tillsätt önskade ingredienser, tex paprika och ärtor. Lägg i dom senare;om de inte behöver lika mycket stektid.;;' +
      'Grilla samtidigt kycklingklubborna i ugnen.;'
    }
    ,
    {
      name: 'Torsk i tomatsås',
      url: '',
      categories: [],
      date: new Date('2010-10-24'),
      description: 'Blanda krossade tomater, CF, tabasco, sambal oelek, tomat puré, kryddor.;' +
      'Häll detta över den frysta fisken. Lägg ev på lite riven ost. In i ugnen;' +
      'på 225 grader i 30 min. Servera med ärtor och ris el potatis.;'
    }
    ,
    {name: 'Biffar', url: '', categories: [], date: new Date('2010-10-24'), description: 'Servera med grönsker och ev blomkålsmos;'}
    ,
    {
      name: 'Kycklinggratäng med dijonsenap och basilika',
      url: 'http://www.tasteline.com/Recept/LCHF__Kycklinggratang_med_dijonsenap_och_basilika',
      categories: [],
      date: new Date('2010-10-24'),
    },
    {
      name: 'Köttgryta',
      url: 'http://receptfavoriter.se/recept/koettgryta-vintergryta-med-bacon-aepple-och-svamp.html',
      categories: [],
      date: new Date('2010-10-28'),
    },
    {
      name: 'Rödbetssymfoni med chevreost',
      url: 'http://www.recept.nu/1.272687/pelle_tengblad/forratter/gronsaker_potatis_andra_rotfrukter/' +
      'rodbetssymfoni_med_chevreost_och_rostade_pecannotter',
      categories: [],
      date: new Date('2010-10-28'),
    },
    {
      name: 'Kycklingfilé med jordnötssmör och kokos',
      url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=60',
      categories: [],
      date: new Date('2010-11-15'),
      description: 'Tillbehör: Broccoli;'
    }
    ,
    {name: 'Paella', url: 'http://www.recepten.se/recept/paella.html', categories: [], date: new Date('2010-11-15')},
    {name: 'Gulaschsoppa', url: '', categories: [], date: new Date('2010-11-15'), description: 'Serverna med CF och ev ostplättar;'}
    ,
    {
      name: 'Prinsesstårta Fläder Glutenfri',
      url: 'http://www.allergimat.com/recept.asp?id=1422',
      categories: [],
      date: new Date('2010-11-15'),
      description: 'Undvik Marsipanlock Odense använd ICA.;;http://www.brollopstorget.se/Bloggar-9-39/b1476-4.html;;' +
      '------------------------------------------------------------------------;;' +
      'MMF - http://www.bagerskan.se/2010/04/marsmallowsfondant-mmf.html>;;' +
      '------------------------------------------------------------------------;;' +
      '**Hallonmousse**;3 dl hallon;4 msk strösocker;1 dl mild naturell yoghurt;4 st gelatinblad (el. 2 tsk pulver + 2 msk vatten);' +
      '1 dl vispgrädde;;Blötlägg gelatinbladen. Mixa hallon och socker mer stavmixer. Tillsätt;' +
      'yoghurten och mixa lite till. Smält gelatinet i vattenbad el i micron.;' +
      'Häll ner det smälta gelatinet i hallonmixen och mixa lite till. Vispa;' +
      'grädden till ett fast skum och vänd ner i hallonkrämen. Fördela på;' +
      'tårtbotten och låt stelna i kylskåp ca 2 tim.;;Räcker till 1 lager i en normalstor tårta;;' +
      '------------------------------------------------------------------------;;' +
      '***Hallonmousse***;;*3 dl vispgrädde;225 gram hallon, färska eller frysta;' +
      '½ dl socker;4 gelantinblad*;;*Lägg gelantinet i kallt vatten.;Koka upp hallon och socker.;' +
      'Låt puttra några minuter och sila sedan bort fröna.;Blanda gelantin i hallonsåsen, låt svalna.;' +
      'Vispa grädden fast och blanda med hallonsåsen.;Kyl ett par timmar.;' +
      'http://megafonen.nu/susanne/tag/hallonmousse/>*;;------------------------------------------------------------------------;;' +
      '**Chokladmousse**;;1,5dl vispgrädde som jag sedan vispade;100g mjölkchoklad smält och avsvalnat.;' +
      'Jag blandade chokladen i grädden med en sked. Ska man kanske vispa den;med visp? Ganska bra konsistens.;;' +
      '**Nougatmousse**;100g nougat;1,5 dl vispgrädde;Tillagning enligt ovan;Ganska bra konsistens.Hårdnade i kylen.;'
    }
    ,
    {
      name: 'Pasta med kycklingfilé i vitlökssås',
      url: '',
      categories: [],
      date: new Date('2010-11-22'),
      description: 'Koka pasta enligt anvisningarna.;;Bryn kycklingfilé, krydda med salt, vitpeppar och ca två pressade;vitlöksklyftor.;;' +
      'När kycklingen nästan är klar häll på grädde efter behag och pressa i;' +
      'två vitlöksklyftor till. Fixa till tjockleken med maizena och tillsätt;ca 1/2-1 dl riven parmesanost.;;' +
      'Dela cocktailtomater och lägg i när allt är klart annars blir de för;mjuka.;;Dekorera med basilikablad.;'
    }
    ,
    {
      name: 'Renskavsgryta',
      url: '',
      categories: [],
      date: new Date('2010-12-12'),
      description: 'Stek den otinade renskaven i en gryta med en liten lök och ev lite;champinjoner, tillsätt CF (viltgryta).;;' +
      'Servera med ärtor och portatismos.;'
    }
    ,
    {
      name: 'Ugnsstekt basilikalax',
      url: 'http://www.arla.se/Default____17653.aspx?RecipeID=22152',
      categories: [],
      date: new Date('2011-01-02'),
      description: 'Stek lite extra brocoli och morot i och med att vi inte har ris till.;'
    }
    ,
    {name: 'Flygande jakob', url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=5', categories: [], date: new Date('2011-01-02')},
    {
      name: 'Sallad med kärftstjärtar & romsås',
      url: 'http://heavenladyn.bloggplatsen.se/2007/07/31/217695-viktvaktarmat-sallad-med-kraftstjartar-romsas/',
      categories: [],
      date: new Date('2011-01-02'),
      description: 'Ta bort brödet och lägg till lite mer grönsaker.;'
    }
    ,
    {
      name: 'Baconlindade kycklingrullar med svamp och halloumigratäng',
      url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=262',
      categories: [],
      date: new Date('2011-01-02'),
    },
    {
      name: 'Bakad potatis',
      url: 'http://www.recepten.se/recept/bakad_potatis_skinkroera.html',
      categories: [],
      date: new Date('2011-01-02'),
      description: 'Räkröra:;http://www.matklubben.se/recept/smarrig_raekroera_till_bakad_potatis_89831.html;'
    }
    ,
    {
      name: 'Korvgryta',
      url: 'http://www.coop.se/Recept--mat/Recept/m/mosters-korvgryta/',
      categories: [],
      date: new Date('2011-01-02'),
      description: 'http://www.matklubben.se/recept/korvgryta_22569.html;;En blandning av dessa :);'
    }
    ,
    {
      name: 'Köttfärsfyllda paprikor',
      url: '',
      categories: [],
      date: new Date('2011-01-09'),
      description: 'Köttfärs;;Vitlök;;Champinjoner;;Testa med mungbönor eller sojabönor;;Ost;;Paprikor;;Kryddor;;Tillbehör: CF;'
    }
    ,
    {
      name: 'Sallad',
      url: '',
      categories: [],
      date: new Date('2011-01-09'),
      description: 'Exempel på ingredienser;;Grönsallad;Sojabönor;Qinoua;Tomat;Gurka;Fetaost;Morot;Squash;Ägg; ;'
    }
    ,
    {
      name: 'Couscoussallad med kyckling',
      url: '',
      categories: [],
      date: new Date('2011-01-23'),
      description: 'Couscous;Sallad;Gurka;Tomat;Kikärtor alt mungbönor;Paprika;;Yoghurtsås;'
    }
    ,
    {
      name: 'Tonfisk och kesosallad',
      url: 'http://www.tasteline.com/recept/tonfisk_och_kesosallad',
      categories: [],
      date: new Date('2011-01-23'),
    },
    {
      name: 'Lax med spenat',
      url: '',
      categories: [],
      date: new Date('2011-01-23'),
      description: 'Lax;Spenat;Grädde;;Salt;Vitpeppar;ev muskot;'
    }
    ,
    {
      name: 'Fläskkotletter',
      url: '',
      categories: [],
      date: new Date('2011-01-23'),
      description: 'Fläskkotletter;;Sallad alt någon kokt grönsak;;ev ris och sås;'
    }
    ,
    {
      name: 'Fetaostgratinerad kyckling',
      url: 'http://www.menyse.com/3.16692/recept/fetaostgratinerad-kyckling-gi/',
      categories: [],
      date: new Date('2011-02-06'),
    },
    {
      name: 'Korv stroganoff',
      url: 'http://www.menyse.com/3.20649/recept/enkel-korv-stroganoff',
      categories: [],
      date: new Date('2011-02-06'),
      description: 'Stek korven rejält så den nästan blir krispig;;Använd soja istället för salt;'
    }
    ,
    {
      name: 'Broccoli- och skinkomelett',
      url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=76',
      categories: [],
      date: new Date('2011-02-06'),
      description: 'Utan lök!;'
    }
    ,
    {
      name: 'Teriyaki Lax med risnudlar',
      url: 'http://www.alltommat.se/recept/Teriyaki-Lax-med-risnudlar-4000',
      categories: [],
      date: new Date('2011-02-20'),
    },
    {
      name: 'Mustig marockansk gryta med frisk apelsin',
      url: '',
      categories: [],
      date: new Date('2011-02-27'),
      description: 'Linas matkasse;'
    }
    ,
    {
      name: 'Stekt torsk',
      url: '',
      categories: [],
      date: new Date('2011-02-27'),
      description: 'Stek torsk i bitar så att den får bra färg -  krydda med chili, salt och;peppar.;;Servera med blomkålsmos och ärtor.;'
    }
    ,
    {
      name: 'Ostbakad pangasiusfile med potatismos',
      url: 'http://matsafari.blogspot.com/2011/02/ostbakad-pangasiusfile-med-potatismos.html',
      categories: [],
      date: new Date('2011-03-06'),
      description: 'Ev ersätta potatismos med blomkåls alt broccolimos.;'
    }
    ,
    {name: 'Röra', url: '', categories: [], date: new Date('2011-03-06'), description: 'Färs;Årtor;Ost;Grädde;'}
    ,
    {name: 'Ugnsbakad röding', url: '', categories: [], date: new Date('2011-03-06'), description: 'Fredagsgourmetboken;'}
    ,
    {name: 'Fläskfilé med rotfrukter', url: '', categories: [], date: new Date('2011-03-06')},
    {
      name: 'Ugnsbakad lax med pesto',
      url: 'http://www.tasteline.com/Recept/Hel_ugnsbakad_lax_med_pesto_och_pinjenotter',
      categories: [],
      date: new Date('2011-03-13'),
      description: 'Servera med antingen sallad, pasta eller ris.;'
    }
    ,
    {
      name: 'Enchiladas med köttfärs',
      url: 'http://www.tasteline.com/Recept/Enchiladas_med_kottfars',
      categories: [],
      date: new Date('2011-03-13'),
      description: 'Servera med sallad;'
    }
    ,
    {
      name: 'Örtkyckling allt-i-ett',
      url: 'http://www.tasteline.com/Recept/Fannys_ortkyckling_allt_i_ett',
      categories: [],
      date: new Date('2011-03-13'),
      description: 'Ta bort potatis;'
    }
    ,
    {
      name: 'Kantarelldoftande fläskfilé i panna',
      url: 'http://www.tasteline.com/Recept/Kantarelldoftande_flaskfile_i_panna',
      categories: [],
      date: new Date('2011-03-13'),
    },
    {name: 'Sesamräkor med limedipp', url: '', categories: [], date: new Date('2011-03-13'), description: 'Fredagsgourmetboken s.44.;'}
    ,
    {name: 'Älgfärsbiffar', url: '', categories: [], date: new Date('2011-03-13'), description: 'Från linas matkasse;'}
    ,
    {name: 'Pepparrotslax', url: 'http://www.recepten.se/recept/pepparrotslax.html', categories: [], date: new Date('2011-03-20')},
    {
      name: 'Fläskfile med sparris och getostrisotto',
      url: 'http://www.recept.nu/1.312717/hakan_larsson/varmratter/kott/flaskfile_med_sparris_och_getostrisotto',
      categories: [],
      date: new Date('2011-03-20'),
    },
    {name: 'Köttbullar med potatismos', url: '', categories: [], date: new Date('2011-03-20')},
    {
      name: 'Kyckling med keso/pesto',
      url: '',
      categories: [],
      date: new Date('2011-03-27'),
      description: '**Ingredienser:**;1 kg kyckling;Rökt påläggsskinka;1 burk pesto;1 stor burk keso;2 vitlöksklyftor;' +
      'salt och peppar;;**Utförande:**;Skär sönder kycklingfileerna och lägg dem i en ugnssäker form ,;' +
      'skär skinkan i mindre bitar och strö över kycklingen;' +
      'Blanda ihop keso , pesto , vitlök , salt och peppar och bred över;kycklingen.;Ställ in i ugnen 225 grader i ca 45 minuter;' +
      '( kolla så kycklingen är ordentligt genomstekt );Servera med en sallad;'
    }
    ,
    {
      name: 'Pastasallad med chevre och rostade pinjenötter',
      url: 'http://www.menyse.com/3.13426/recept/pastasallad-med-chevre-och-rostade-pinjenotter/',
      categories: [],
      date: new Date('2011-03-27'),
      description: 'Lägg till stekt bacon i bitar med.;'
    }
    ,
    {name: 'Biff', url: '', categories: [], date: new Date('2011-04-03'), description: 'Med tillbehör;'}
    ,
    {
      name: 'Friedrice med kycklingspett',
      url: '',
      categories: [],
      date: new Date('2011-05-01'),
      description: '**Stekt ris med ärtor och ägg** - thairis - friedrice;' +
      'Serveras som finare variant än ris vid exempelvis en thaibuffe.;' +
      '200 g ärtor;2 vitlöksklyftor;2 msk olja;750 g kokt jasminris;2 msk ljus sojasås;1 ägg;' +
      'Skiva vitlöken. Stek vitlök och ärtor i olja någon minut. Rör om och;' +
      'tillsätt ris och sojasås. Stek under omrörning tills riset är varmt. För;' +
      'riset åt sidan och knäck i ett ägg. Rör om så att ägget blandar sig med;riset;;' +
      '**Kycklingspett**;;1. Blötlägg vanliga träspett i en timme innan du börjar göra;' +
      'spetten. På det sättet slipper du brinnande spett på grillen eller;svedda spett i ugnen.;' +
      '2. Trä upp den skurna kycklingen på spetten, peppra, salta och;pensla kycklingen med färdig marinad.;' +
      '3. Lägg kycklingspetten på grillgaller i ugnen.;4. Placera en plåt med bakplåtspapper under grillgallret för att;' +
      'undvika att kycklingen droppar ned på ugnsbotten.;5. Grilla spetten till fått fin färg.'
    }
    ,
    {
      name: 'Italienska köttbullar med tomatsås',
      url: 'http://svt.se/svt/jsp/Crosslink.jsp?d=6134&a=111103',
      categories: [],
      date: new Date('2011-05-01'),
      description: 'Minska ner lite på schalottenlöken.;'
    }
    ,
    {
      name: 'Laxburgare',
      url: 'http://www.tasteline.com/recept/snabb_laxburgare_med_mango_och_wasabimajonnas',
      categories: [],
      date: new Date('2011-05-01'),
      description: 'http://www.alltommat.se/recept/Laxburgare-med-skagenrora-5249;'
    }
    ,
    {
      name: 'Mustig köttgryta med rödvin och vitlök',
      url: 'http://www.tasteline.com/Recept/Mustig_kottgryta_med_rodvin_och_vitlok',
      categories: [],
      date: new Date('2011-06-25'),
    },
    {
      name: 'Leif Mannerströms Kalops',
      url: 'http://www.tasteline.com/Recept/Leif_Mannerstroms_Kalops',
      categories: [],
      date: new Date('2011-06-25'),
    },
    {
      name: 'Kycklinggratäng i chilisås',
      url: 'http://www.tasteline.com/Recept/Kycklinggratang_i_chilisas',
      categories: [],
      date: new Date('2011-06-25'),
    },
    {
      name: 'Mannerströms Wallenbergare på vilt',
      url: 'http://www.recept.nu//1.219761/leif_mannerstrom/huvudratt/vilt/mannerstroms_wallenbergare_pa_vilt',
      categories: [],
      date: new Date('2011-06-25'),
    },
    {
      name: 'Rökt makrill',
      url: '',
      categories: [],
      date: new Date('2011-09-11'),
      description: 'Servera med blomkålsmos alt. stekt skivad blomkål och en sallad.;'
    }
    ,
    {
      name: 'Sallad med getost och pinjenötter',
      url: '',
      categories: [],
      date: new Date('2011-09-11'),
      description: '150 g getost;½ kg sallad och skott, gärna lite olika sorter;1 st päron;5 st cocktailtomater;' +
      '2 st avokado;½ st gurka;30 g pinjenötter;flingsalt;svartpeppar från kvarn;;Sås?;'
    }
    ,
    {
      name: 'Laxburgare med pepparrotsvisp och coleslaw',
      url: 'http://www.matklubben.se/recept/laxburgare_med_pepparrotsvisp_86722.html',
      categories: [],
      date: new Date('2011-09-11'),
      description: 'Inloggning till matklubben: fridafrick;;Ta bort löken.;;' +
      'Gör coleslaw som ett alternativ istället för grönsallad.;;Se recept för coleslaw i LCHF-boken.;'
    }
    ,
    {name: 'Blomkålsgratäng', url: 'http://www.lchfrecept.com/ShowRecepy.aspx?ID=1269', categories: [], date: new Date('2011-09-11')},
    {
      name: 'Fiskgratäng alá LCHF',
      url: 'http://ensaligsoppa.blogspot.com/2011/08/fiskgratang-ala-lchf.html',
      categories: [],
      date: new Date('2011-09-26'),
      description: 'Sammanställning av det enormt svårlästa receptet;;1.  Koka upp blomkålen (vi skippade broccolin);' +
      '2.  Lägg fisk i ugnsform och in i ugn i tio minuter, 200grader;3.  Skala räkor och koka skalet med vatten;' +
      '4.  Gör sås av smör, maizena, grädde, lite räkfond och fiskvatten. Sjud;' +
      '    i tre minuter. I med dill, ett ägg,räkorna. Smaka av med salt o;    peppar.;' +
      '5.  Gör mos av blomkålen, ost, ett ägg, grädde, salt o peppar.;6.  lägg i fisken i formen;7.  lägg mosen runt om;' +
      '8.  häll över såsen;9.  Strö över ost;10. In i ugn ca 15 minuter, 250grader, kör på grill sista fem typ för at;    få fin färg.;'
    }
    ,
    {
      name: 'Köttbullar i tomatsås',
      url: 'http://spralligast.blogspot.com/2008/01/tapas-till-middag.html',
      categories: [],
      date: new Date('2011-10-19'),
    },
    {
      name: 'LCHF - Kladdkaka',
      url: 'http://www.recept.nu/1.322301/anna_hallen/efterratter_godis/agg_mejeri/lchf_kladdkaka',
      categories: [],
      date: new Date('2011-10-19'),
    },
    {name: 'Focaccia', url: 'http://www.tasteline.com/Recept/Focaccia_2', categories: [], date: new Date('2011-10-19')},
    {
      name: 'Chorizo i rödvin',
      url: 'http://www.tasteline.com/Recept/Spansk_afton_med_tapas_och_cherry',
      categories: [],
      date: new Date('2011-10-19'),
    },
    {
      name: 'Biff Stroganoff med blomkålsris',
      url: 'http://alltomlchf.blogspot.se/2012/02/biff-stroganoff-lchf.html',
      categories: [],
      date: new Date('2012-03-26'),
    }
  ];*/
  recipes: Observable<Recipe[]>;
  private _recipes: BehaviorSubject<Recipe[]>;
  private dataStore: {
    recipes: Recipe[]
  };

  constructor(private db: DataStorageService) {
    // this.db.getRecipes().subscribe(data => {
    //   this.recipes = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } as Recipe;
    //   });
    //   console.log('1');
    //   console.log(this.recipes);
    // });
    this.dataStore = { recipes: [] };
    this._recipes = <BehaviorSubject<Recipe[]>>new BehaviorSubject([]);
    this.recipes = this._recipes.asObservable();
    this.loadRecipes();
  }

  getRecipe(index: number) {
    return this.dataStore.recipes[index];
  }

  updateRecipe(index: number, recipe: Recipe) {
     this.db.updateRecipe(recipe);
  }

  private loadRecipes() {
  this.db.loadRecipes().subscribe(data => {
    this.dataStore.recipes = data.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      } as Recipe;
    });
    this._recipes.next(Object.assign({}, this.dataStore).recipes);
  });
  }
}
