import { LightningElement ,api} from 'lwc';
const CARD_VISIBLE_CLASSES = 'fade slds-show'
const CARD_HIDDEN_CLASSES = 'fade slds-hide'

const DOT_VISIBLE_CLASSES = 'dot active'
const DOT_HIDDEN_CLASSES = 'dot'

const DEFAULT_SLIDER_TIMER = 3000 // 3 second
const DEFAULT_SLIDER_WIDTH = 700
export default class Carouselchild extends LightningElement {
       
    // get the slide object from parent component
    slides=[];
    slidenumber=1;
    @api slideTimer = DEFAULT_SLIDER_TIMER
    @api enableAutoScroll = false
    @api customWidth = DEFAULT_SLIDER_WIDTH
    @api showFull = false

    @api 
    get slidesData(){
        return this.slides;
    }

    set slidesData(data){
        this.slides=data.map((item, index)=>{
            return index === 0 ?
            {
                ...item,
                slidenumber:index+1,
                cardClasses: CARD_VISIBLE_CLASSES,
                dotClasses: DOT_VISIBLE_CLASSES

            }:{
                ...item,
                slidenumber:index+1,
                cardClasses: CARD_HIDDEN_CLASSES,
                dotClasses: DOT_HIDDEN_CLASSES

            }

        })
        console.log('Slide Data:', this.slides);
    }
    
    // to handle the slide when we moveqard next and previous
   slidehandler(id){
    if(id>this.slides.length){
       this.slidenumber=1
    }
    else if(id<1){
        this.slidenumber=this.slides.length;
    }
    else{
        this.slidenumber=id
    }
    this.slides=this.slides.map(item=>{
        return this.slidenumber === item.slidenumber?
        {
            ...item,
            cardClasses: CARD_VISIBLE_CLASSES,
            dotClasses: DOT_VISIBLE_CLASSES

        }:{
            ...item,
            cardClasses: CARD_HIDDEN_CLASSES,
            dotClasses: DOT_HIDDEN_CLASSES

        }

    })

   }
    // arrow handle 

    currentslide(event){
        let slidenumber=Number(event.target.dataset.id);
        this.slidehandler(slidenumber)
    }
    forwardslide(){
        let slidenumber=this.slidenumber+1;
        this.slidehandler(slidenumber)
    }
    backwardslide(){
        let slidenumber=this.slidenumber-1;
        this.slidehandler(slidenumber)
    }
    get maxWidth(){
        return this.showFull ? `width:100%`: `width:${Number(this.customWidth)}px`
    }
    connectedCallback(){
        if(this.enableAutoScroll){
            this.timer = window.setInterval(()=>{
                this.slideSelectionHandler(this.slideIndex+1)
        }, Number(this.slideTimer))
        }
       
    }

    disconnectedCallback(){
        if(this.enableAutoScroll){
            window.clearInterval(this.timer)
        }
    }

}