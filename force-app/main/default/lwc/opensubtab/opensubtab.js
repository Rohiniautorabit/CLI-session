import { LightningElement,wire } from 'lwc';
import {IsConsoleNavigation, openSubtab, EnclosingTabId} from 'lightning/platformWorkspaceApi'
export default class Opensubtab extends LightningElement {

    // EnclosingTabId is used to get the current tab id , which we will pass in parent 
    // record id aos using open usbtab we open it, remaining same as opentab 
    // here we are passing parent id

    @wire(IsConsoleNavigation)
    isConsoleNavigation

    @wire(EnclosingTabId)
    parentTabId

    openTabRecordId(){
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId, {
                recordId:'001dL00000pHCsFQAW',
                label:'roh sub',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }
    openTabUrl(){
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId, {
                url:'/lightning/r/Account/001dL00000pHCsFQAW/view',
                label:'roh sub',
                focus:true
            }).catch(error=>{
                console.error("Error in opening tab", error)
            })
        }
    }
    openTabPageRef(){
        if(this.isConsoleNavigation){
            openSubtab(this.parentTabId, {
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

    
}