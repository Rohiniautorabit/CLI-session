import { LightningElement,api } from 'lwc';

export default class Spreadoperatorchild extends LightningElement {
    // using api operator we are calling the spread opearator valiues
    @api userName
    @api age
    // we call the calss value here , then styling wont apply else it works 
    @api className
}