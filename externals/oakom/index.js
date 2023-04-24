export const oakom = {
    init: () => {
        console.log('Oakcom initialized');
    },
    startSession: () => {
        console.log('Oakcom session started');
        return {
            sendEvent: (event) => {
                console.log('Oakcom event sent', event);
            }
        }
    }
};
