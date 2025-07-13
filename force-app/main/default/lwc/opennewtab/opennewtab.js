import { LightningElement,wire } from 'lwc';
import {IsConsoleNavigation, openTab} from 'lightning/platformWorkspaceApi'
export default class Opennewtab extends LightningElement {

    @wire(IsConsoleNavigation)
    isConsoleNavigation

    // This method is used to open a new tab in the console
    // It checks if the current navigation is in console mode
    // If it is, it opens a new tab with the specified recordId and label with focus on it 
    // If not, it does nothing
    openTabRecordId(){
        if(this.isConsoleNavigation){
            openTab({
                recordId:'001dL00000pHCsFQAW',
                label:'Roh',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
            
        }
    }
    // This method is used to open a new tab in the console
    // It checks if the current navigation is in console mode
    // If it is, it opens a new tab with the specified URL and label with focus on it
    // If not, it does nothing
    openTabUrl(){
        if(this.isConsoleNavigation){
            openTab({
                url:'/lightning/r/Account/001dL00000pHCsFQAW/view',
                label:'roh Url',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }
        //pageReference, recordId, and url are prioritized in that order. if all three are provided, pageReference is used.
    openTabPageRef(){
        if(this.isConsoleNavigation){
            openTab({
            pageReference:{
                type:'standard__objectPage',
                attributes:{
                    objectApiName:'Account',
                    actionName:'list'
                }
            },
                label:'Accounts list',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }


    }


//    pageReference has this attribute type and attributes , tyep take what page it is standard or custom
// attributes takes object name and actionnames

}