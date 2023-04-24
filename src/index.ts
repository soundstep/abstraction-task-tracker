import { oakom } from 'oakom';
import { shadecast } from 'shadecast';

oakom.init('oakcom-client-secret-123');
oakom.startSession();
oakom.sendEvent({
    id: '123456',
    timestamp: 1682327354838,
    name: 'cta-click',
    platform: 'ctv',
    version: '1.0.0',
    data: {
        customData: 'anything',
        device: 'amazonfiretv',
        screen: 'homepage',
        user: 'user-id'
    }
});

await shadecast.configure({
    token: 'shadecast-client-secret-123',
    apiVersion: '2014-10-01',
    platform: 'ctv.amazonfiretv',
    version: '1.0.0'
});

shadecast.report({
    sessionId: 'session-id',
    date: '2023-04-24T09:19:10.700Z',
    name: 'cta-click',
    screenId: 123,
    data: {
        customData: 'anything',
        user: 'user-id'
    }
});
