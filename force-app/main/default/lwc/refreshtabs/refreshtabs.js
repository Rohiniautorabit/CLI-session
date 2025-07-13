import { LightningElement,wire } from 'lwc';
import {IsConsoleNavigation, refreshTab, getFocusedTabInfo} from 'lightning/platformWorkspaceApi'
export default class Refreshtabs extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp

    // This method is called when the button is clicked wil get the tab if from getFocusedTabInfo
    // from there we are apssing the tabid and inclusign refresh for all subtabs 

    async refreshTabHandler(){
        if(this.isConsoleApp){
            const {tabId} = await getFocusedTabInfo()
            await refreshTab(tabId, {
                includeAllSubtabs:true
            })
        }
    }
}