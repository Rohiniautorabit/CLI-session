import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm'
export default class lightningpromt extends LightningElement {

    async confirmHandler(event){
        const res=await LightningConfirm.open({
            message:"Would you like to refresh the page",
            label:"Are you sure?", 
            //variant:"headerless", // use  this for hiding the header
            theme:"warning" // success->green, warning->orange, error->red, info ->grey

        })
        console.log(res)
        // on click of ok result will be true else false
          if(res){
            location.reload
          }
    }
}