import { LightningElement ,api} from 'lwc';
import stagename from '@salesforce/schema/Opportunity.StageName';
import id from '@salesforce/schema/Opportunity.Id';
import {updateRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Lightningactionsinlwc extends LightningElement {
    @api recordId
    @api invoke(){

        const fields={}
        fields[id.fieldApiName]=this.recordId;
        fields[stagename.fieldApiName]='Closed Won';
        const recordInput = {fields};
        updateRecord(recordInput)
            .then(() => {
                const toastEvent = new ShowToastEvent({
                    title: 'Success',
                    message: 'Opportunity Stage updated to Closed Won',
                    variant: 'success',
                });
                this.dispatchEvent(toastEvent);
            })
            .catch(error => {
                const toastEvent = new ShowToastEvent({
                    title: 'Error updating stage',
                    message: error.body.message,
                    variant: 'error',
                });
                this.dispatchEvent(toastEvent);
            });
    
    }
    
}