import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext, 
    subscribe, unsubscribe, publish, APPLICATION_SCOPE } from 'lightning/messageService';
import MESSAGE_CHANNEL from "@salesforce/messageChannel/sampleMessageChannel__c";

export default class lMSLightningWebComponent extends LightningElement {
    context = createMessageContext();
    subscription = null;
    @track subscribed = false;
    @track rawMessage;
    title;
    messageBody;
    MESSAGE_SOURCE = "lightning:lwc";
    
    handleMessage(message) {
        console.log(JSON.stringify(message, null, '\t'));
        this.rawMessage = message ? JSON.stringify(message, null, '\t') : 'no message payload';
    }
   
    handleSubscribe(event) {
       console.log('handleSubscribe');
       if (this.subscription) {
        return;
       }
        this.subscription = subscribe(this.context, MESSAGE_CHANNEL, (message) => {
            this.handleMessage(message);
        }, { scope: APPLICATION_SCOPE});
        this.subscribed = true;
        console.log('Subscribed');
        this.template.querySelector('[data-id="bSubscribe"]').hidden = true;
        this.template.querySelector('[data-id="bUnsubscribe"]').hidden = false;

    }
   
    handleUnSubscribe(event) {
        console.log('handleUnSubscribe');
        if(this.subscription){
            unsubscribe(this.subscription);
            this.subscription = null;
        }
        this.subscribed = false;
        this.template.querySelector('[data-id="bSubscribe"]').hidden = false;
        this.template.querySelector('[data-id="bUnsubscribe"]').hidden = true;
    }

    handleSendMessage(event) {
        const message = {
            source: this.MESSAGE_SOURCE,
            title: this.title ? this.title : '',
            message: this.messageBody ? this.messageBody : ''
        }
        publish(this.context, MESSAGE_CHANNEL, message);
    }
     
    disconnectedCallback() {
        releaseMessageContext(this.context);
    }

    handleChange(event) {
        const field = event.target.name;
        if (field === 'title') {
            this.title = event.target.value;
        } else if (field === 'messageBody') {
            this.messageBody = event.target.value;
        }
    }

    errorCallback(error, stack) {
        console.log(error,stack);
    }
}