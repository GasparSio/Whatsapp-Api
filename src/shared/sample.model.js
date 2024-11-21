export const sampleText = (textResponse, number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text"
    });
    return data;
};

export const sampleImage = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://example.image.png"
        },
    });
    return data;
};

export const sampleAudio = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://example.audio.mp3"
        },
    });
    return data;
};

export const sampleVideo = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": "https://example.video.mp4"
        },
    });
    return data;
};

export const sampleDocument = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": "https://example.document.pdf"
        },
    });
    return data;
};

export const sampleButtons = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Confirmas tu registro?" //Seria el titulo de los botones
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply", //siempre sera de tipo reply
                        "reply": {
                            "id": "001", //unico para cada boton
                            "title": "SI" //el texto dentro del boton
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002", //unico para cada boton
                            "title": "NO" //el texto dentro del boton
                        }
                    }
                ]
            }
        }
    });
    return data;
};

export const sampleLocation = (number) => {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "41.37425395852445",
            "longitude": "2.1502215810955425",
            "name": "Torres Venecianas",
            "address": "Av. de la Reina Maria Cristina, Sants-Montjuïc, 08004 Barcelona"
        }
    });
    return data;
};