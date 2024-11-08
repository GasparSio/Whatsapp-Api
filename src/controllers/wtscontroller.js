const whatsappController = {
    verifyToken: (req, res) => {
        res.status(200).send('Token is valid');
    },
    receiveMessage: (req, res) => {
        res.status(200).send('Message received');
    }

};
export default whatsappController;


