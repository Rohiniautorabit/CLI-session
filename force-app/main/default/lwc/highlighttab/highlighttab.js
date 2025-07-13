import { LightningElement, wire } from 'lwc';
import {IsConsoleNavigation, getFocusedTabInfo, setTabHighlighted} from 'lightning/platformWorkspaceApi'

export default class Highlighttab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleApp
    async successHandler(){
        if(this.isConsoleApp){
           const {tabId} =  await getFocusedTabInfo()
           setTabHighlighted(tabId, true, {
            state:'success',
            pulse:true
           })
        }
    }
    async warningHandler(){
        if(this.isConsoleApp){
           const {tabId} =  await getFocusedTabInfo()
           setTabHighlighted(tabId, true, {
            state:'warning',
            pulse:true
           })
        }
    }
    async errorHandler(){
        if(this.isConsoleApp){
           const {tabId} =  await getFocusedTabInfo()
           setTabHighlighted(tabId, true, {
            state:'error',
            pulse:true
           })
        }
    }
    // setTabHighlighted gets the tabid and if its true then it will highlight the tab
    // with that state and pluse 
}