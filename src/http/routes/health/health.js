module.exports = async (request, response) => {
    return response.status(200).json({
        'status': 'up',
    });
};
