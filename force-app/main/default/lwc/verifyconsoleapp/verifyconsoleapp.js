import { LightningElement,wire } from 'lwc';
import {IsConsoleNavigation} from 'lightning/platformWorkspaceApi'
export default class Verifyconsoleapp extends LightningElement {
    // this api IsConsoleNavigation used to check if its a console app or not
    @wire(IsConsoleNavigation)
    isConsoleNavigation
}


