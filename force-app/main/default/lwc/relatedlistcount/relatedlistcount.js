import { LightningElement, wire } from 'lwc';
import { getRelatedListCount } from 'lightning/uiRelatedListApi';
export default class Relatedlistcount extends LightningElement {
    releatedlist
    @wire(getRelatedListCount, 
        { parentRecordId: '001dL00000reZ5NQAU', // The ID of the parent record that you want to get related list for
            relatedListId: 'Contacts' // The API name of a related list object such as Contacts, Opportunities etc
         }
    )getcount({data,error}){
        if(data){
            console.log('Related List Count:', JSON.stringify(data));
            this.releatedlist = data;
        }else if(error){
            this.releatedlist = error;
        }
    }
}

