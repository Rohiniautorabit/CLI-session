import { LightningElement } from 'lwc';
import { RefreshEvent } from 'lightning/refresh';

import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import CONTACT_ACCOUNT from '@salesforce/schema/Contact.AccountId';

export default class refreshstandardview extends LightningElement {
    fields = [CONTACT_NAME, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ACCOUNT];


    handleSuccess(event) {
        const contactId = event.detail.id;
        console.log('✅ Contact Created with Id:', contactId);

        // Optional: Refresh surrounding Flexipage (if applicable)
        this.dispatchEvent(new RefreshEvent());
    }
}
