import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    handleheaderslotchange(event) {
        const headerSlot = this.template.querySelector('.slds-modal__header');
        if (headerSlot) {
            headerSlot.classList.remove('remove_header'); 
        
    }
    
}
handlefooterslotchange(event) {
    const footerSlot = this.template.querySelector('.slds-modal__footer');
    if (footerSlot) {
        footerSlot.classList.remove('slds-hide');
    }
}
}