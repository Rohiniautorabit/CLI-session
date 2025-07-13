import { LightningElement,api } from 'lwc';
import getAccountRating from '@salesforce/apex/refreshcontroller.getAccountRating';
import {registerRefreshHandler, unregisterRefreshHandler} from 'lightning/refresh'
export default class Refreshforcustomcomp extends LightningElement {

    ratingvalue
    refreshhandlerid
    @api recordId;
     fetchrating(){
        getAccountRating({"accountId":this.recordId})
        .then(result => {
            if (result && result.length > 0) {
                this.ratingvalue = result[0].Rating;
            } else {
                this.ratingvalue = 'Not Available';
                console.warn('No result from Apex');
            }
        })
        .catch(error => {
            console.error('Error fetching account rating:', error);
        });
     }

     refreshHandler(){
        return new Promise(resolve => {
            this.fetchrating();
            resolve(true);
        });
     }
     disconnectedCallback(){
        unregisterRefreshHandler(this.refreshHandlerId)
    }
    connectedCallback() {
        if (this.recordId) {
            this.refreshHandlerId = registerRefreshHandler(this, this.refreshHandler);
            this.fetchrating();
        } else {
            console.warn('No recordId passed to component');
        }
    }
    

}