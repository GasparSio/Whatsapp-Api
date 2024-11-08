export const verifyToken = (req, res) => {
    res.status(200).send('Token is valid');
};
export const receiveMessage = (req, res) => {
    res.status(200).send('Message received');
};

