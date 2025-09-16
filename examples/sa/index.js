import {createClient} from "../../packages/oa";

async function main() {
    const client = createClient({
        appId: 'your-app-id',
        appSecret: 'your-app-secret',
    })

    const result = await client.callbackCheck({
        action: 'all'
    })

}