import https from 'https';

const sendMessageWhatsapp = (textResponse, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text"
    });

    const options = {
        host: "graph.facebook.com",
        path: "/v21.0/482148021647494/messages",
        method: "POST",
        body: data,
        header: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`
        } 
    }

    const request = https.request(options, res => {
        res.on('data', d => {
            process.stdout.write(d);
        });
    })
    req.on('error', error => {
        console.error(error);
    })
    req.write(data);
    req.end();
};

export default sendMessageWhatsapp;