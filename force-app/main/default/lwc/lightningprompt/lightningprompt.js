import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';
import LightningAlert from 'lightning/alert'
export default class Lightningprompt extends LightningElement {

    promptHandler() {
        LightningPrompt.open({
            message:"Enter the age",
            label:"Check your voting eligibility",
            theme:"success",
            defaultValue:"18"
        }).then(res=>{
            if(res && Number(res)>18){
                this.alerthandler("Your are eligible","Sucess","success")
            }else{
                this.alerthandler("You are not eligible","Error","error")
            }
        })

}
alerthandler(message, label, theme) {
    LightningAlert.open({
            message: message,
            label: label,
            theme: theme, // success->green, warning->orange, error->red, info ->grey
        });
    }
    // on click of ok result will be true else false

}