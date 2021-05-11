module.exports = {
  async create(request, response) {
    try {
      return response.json(request.file);
    } catch (err) {
      return response.status(400).send({ error: 'Upload falhou!' });
    }
  }
}