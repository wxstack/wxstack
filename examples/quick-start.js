import { createClient } from '../packages/oa/index.js';

// This example demonstrates the basic usage shown in README.md
async function quickStartExample() {
    console.log('🚀 wxstack Quick Start Example');
    
    // Create client (with demo credentials - won't work but shows API structure)
    const client = createClient({
        appId: 'demo-app-id',
        appSecret: 'demo-app-secret',
        domain: 'auto',
        timeoutMs: 15000,
        tokenMode: 'normal',
    });
    
    console.log('✅ Client created successfully');
    console.log('📋 Available methods:');
    
    // Show available methods on the client
    const methods = [
        'callbackCheck',
        'getUserInfo', 
        'sendTemplateMessage',
        'createCustomMenu',
        'uploadImage',
        'getAccessToken',
        // ... and many more
    ];
    
    methods.forEach(method => {
        if (typeof client[method] === 'function') {
            console.log(`   ✓ ${method}()`);
        }
    });
    
    console.log('\n📖 For full documentation visit: https://wxstack.b1397kb.com');
    console.log('🔧 Replace demo credentials with real ones to start developing!');
}

// Run the example
quickStartExample().catch(console.error);