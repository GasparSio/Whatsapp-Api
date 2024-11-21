import sendMessageWhatsapp from "../services/whatsapp.service";
import { sampleText, sampleImage, sampleAudio, sampleVideo, sampleDocument } from "../shared/sample.model";

const whatsappController = {
    verifyToken: (req, res) => {
        try {
            const accessToken = '1j2h3g123hjk23jh5vgf23g23bhjk21j3hg123hj12k3hbvcvbn'; //es el token que generamos nosotros
            const tokenFb = req.query['hub.verify_token']; //es el token que nos envia wts
            const challenge = req.query['hub.challenge']; //es lo que nosotros tenemos que devolver a wts si el token que nos envian es el mismo que nuestro token

            if (challenge != null && tokenFb != null && tokenFb === accessToken) {
                res.status(200).send(challenge); //segun la documentacion de wts, tenemos que devolver el challenge en la respuesta
            }
            res.status(400).send();
        } catch (error) {
            res.status(400).send();
        }
    },
    //Recibimos el mensaje de wts
    receiveMessage: (req, res) => {
        try {
            const entry = (req.body['entry'])[0];//como es una lista, tomamos el primer elemento
            const changes = (entry['changes'])[0];
            const value = changes['value'];
            const messageObj = value['messages'];

            if (typeof messageObj !== 'undefined') {
                const messages = messageObj[0];
                const number = messages["from"];

                const text = getTextUser(messages);
                console.log(text);
                
            }

            res.status(200).send('EVENT_RECEIVED'); //tenemos que siempre devolver EVENT_RECEIVED cuando recibimos un mensaje
        } catch (error) {
            res.send('EVENT_RECEIVED');
        }
    }
};

function getTextUser(messages) {
    const text = '';
    const typeMessage = messages['type'];

    if (typeMessage === 'text'){
        text = (messages['text'])['body'];
    }
    if (typeMessage === 'interactive'){
        const interactiveObj = messages['interactive'];
        const interactiveType = interactiveObj['type'];
        if (interactiveType === 'button_reply'){
            text = (interactiveObj['button_reply'])['title'];
        }
        if(interactiveType === 'list_reply'){
            text = (interactiveObj['list_reply'])['title'];
        }
    }
    console.log('sin mensaje');

    return text;
};
export default whatsappController;


