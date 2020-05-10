({
    myAction : function(component, event, helper) {
        var bSubscribe = component.find("bSubscribe");
        $A.util.toggleClass(bSubscribe, "slds-hide");
    
    },

    handleMessage: function(cmp, message, helper) { 
        // Read the message argument to get the values in the message payload
        cmp.set("v.rawMessage", message ? JSON.stringify(message.getParams(), null, 2) : '');
    },

    publishMC: function(cmp, event, helper) {   
        var message = {
            source: cmp.get("v.MESSAGE_SOURCE"),
            title: cmp.get("v.title") ? cmp.get("v.title") : '',
            message: cmp.get("v.messageBody") ? cmp.get("v.messageBody") : ''
        };
        cmp.find("sampleMessageChannel").publish(message);
    }
})