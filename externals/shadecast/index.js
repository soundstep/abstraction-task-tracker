export const shadecast = {
    configure: () => {
        console.log('Shadecast configured');
    },
    report: (sessionId, event) => {
        console.log('Shadecast report sent', sessionId, event);
    }
};
