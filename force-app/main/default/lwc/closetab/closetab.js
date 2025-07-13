import { LightningElement,wire } from 'lwc';
import { IsConsoleNavigation, closeTab, getFocusedTabInfo } from 'lightning/platformWorkspaceApi';

export default class Closetab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation
// getFocusedTabInfo will return the currently focused tab in the console
    // isConsoleNavigation will return true if the app is running in a console context
    // closeTab will close the currently focused tab in the console suing th id - which we can get from 
    // getFocusedTabInfo and it retunr some tab data like tab id - using this we cna close it

    // closeTab is a promose so we are keep it in await and asauyn on  method
    
    closeHandler(){
        if(this.isConsoleNavigation){
            getFocusedTabInfo().then(tabInfo=>{
                console.log("tabInfo", tabInfo)
                closeTab(tabInfo.tabId)
            }).catch(error=>{
                console.error(error)
            })
        }
    }

    async closeAsyncHandler(){
        if(this.isConsoleNavigation){
            try{
               const {tabId} =  await getFocusedTabInfo()
               await closeTab(tabId)
            }catch(error){
                console.error(error)
            }
        }
    }
}