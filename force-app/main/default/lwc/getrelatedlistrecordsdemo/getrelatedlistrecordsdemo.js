import { LightningElement,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class Getrelatedlistrecordsdemo extends LightningElement {
    relatedListRecords;
    @wire(getRelatedListRecords, {
        parentRecordId: '001dL00000reZ5NQAU',
        relatedListId: 'Contacts',
        fields:['Contact.Name', 'Contact.Id','Contact.Phone'] //optional field

    })getreleatedlistrecords({data,error}){
        if(data){
            this.relatedListRecords = data.records;
            console.log('Related List Records:', JSON.stringify(data));
        }else if(error){
            console.error('Error fetching related list records:', error);
        }
    }
    

}