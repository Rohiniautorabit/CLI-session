import { LightningElement ,wire} from 'lwc';
import {IsConsoleNavigation, getFocusedTabInfo, setTabLabel} from 'lightning/platformWorkspaceApi'
export default class Setlabeltab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp
    async setLabelHandler(){
        if(this.isConsoleApp){
            const {tabId} = await getFocusedTabInfo()
            setTabLabel(tabId, 'Huraay!!')
        }
    }
}