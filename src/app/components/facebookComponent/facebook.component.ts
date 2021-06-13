/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-facebook',
    templateUrl: './facebook.template.html'
})

export class facebookComponent extends NBaseComponent implements OnInit {
    centerImages:any[] = [
        {facebImg: "../../assets/Web/Icons/sma.jpg",
        facebImg1: "../../assets/Web/Icons/sthe.jpg",
        text: "Sthembiso J"},
        {facebImg: "../../assets/Web/Icons/sketch.jpg",
        facebImg1: "../../assets/Web/Icons/sthe.jpg",
        text: "Mimi Jaz"},
        {facebImg: "../../assets/Web/Icons/log.jfif",
        facebImg1: "../../assets/Web/Icons/sthe.jpg",
        text: "Nyandeni PK"},
        {facebImg: "../../assets/Web/Icons/joker.jpg",
        facebImg1: "../../assets/Web/Icons/sthe.jpg",
        text: "Lebo Smash"},
        {facebImg: "../../assets/Web/Icons/nhlingo.jpg",
        facebImg1: "../../assets/Web/Icons/sthe.jpg",
        text: "Nhlingo"},
    ]

    sideMenuZ:any[] = [
        {imagePath: "../../assets/Web/Icons/corona.png",
         text: "COVID-19 Information"
        },
        {imagePath: "../../assets/Web/Icons/group.png",
         text: "Find Friends"
        },
        {imagePath: "../../assets/Web/Icons/market.png",
         text: "Marketplace"
        },
        {imagePath: "../../assets/Web/Icons/groups.png",
         text: "Groups"
        },
        {imagePath: "../../assets/Web/Icons/screen.png",
         text: "Watch"
        },
        {imagePath: "../../assets/Web/Icons/event.png",
         text: "Events"
        },
        {imagePath: "../../assets/Web/Icons/memories.png",
         text: "Memories"
        },
        {imagePath: "../../assets/Web/Icons/saved.png",
         text: "Saved"
        },
        {imagePath: "../../assets/Web/Icons/page.png",
         text: "Pages"
        }
    ]

    constructor() {
        super();
    }

    ngOnInit() {

    }
}
