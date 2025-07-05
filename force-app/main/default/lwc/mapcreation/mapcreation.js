import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapcontrollerforLWC.getAccounts';
export default class mapcreationinlwc extends LightningElement {
mapmarkers=[];
markerstitle ="Accountslocation";
@wire(getAccounts)
wireHandler({ data, error }){
    if(data){
        console.log('Account Data:', data);
            this.formatResponse(data)
     }
    if(error){
        console.error('error', error);
    }
}
formatResponse(data){
    if (!Array.isArray(data)) {
        console.error('Data is not an array:', data);
        return;
    }
    this.mapmarkers = data.map(account => {
        return {
            location: {
                Street: account.BillingStreet || '',
                City: account.BillingCity || '',
                State: account.BillingState || '',
                PostalCode: account.BillingPostalCode || '', 
                Country: account.BillingCountry || ''
            },
            title: account.Name,
            value: account.Name,
            description: account.Description,
            icon:'utility:salesforce1'
        }
    });
    this.selectedMarker = this.mapmarkers.length && this.mapmarkers[0].value; // Set the first marker as selected by default
}
handleMarkerSelect(event) {
    this.selectedMarker = event.detail.selectedMarkerValue;
    console.log('Selected Marker:', this.selectedMarkerValue);
}
}