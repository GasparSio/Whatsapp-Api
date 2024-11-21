import https from 'https';
//Para enviar un mensaje a whatsapp
const sendMessageWhatsapp = (data) => {
    const options = {
        host: "graph.facebook.com",
        path: "/v21.0/482148021647494/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`
        } 
    }

    const req = https.request(options, res => {
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