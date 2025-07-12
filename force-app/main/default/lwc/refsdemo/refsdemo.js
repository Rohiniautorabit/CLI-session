import { LightningElement } from 'lwc';

export default class Refsdemo extends LightningElement {

    submitHandler(){
        const name=this.refs.nameRef.value;
        const age= this.refs.ageRef.value;
        console.log("nameVal", name)
        console.log("ageVal", age)

        // herre we area sing the value to inner html using refs 
        this.refs.responseRef.innerHTML = `<p>Submitted Name is ${name} and Age is ${age}</p>`

    }
}