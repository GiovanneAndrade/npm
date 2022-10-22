import * as allExemple from '../repositores/exemple.repository.js'

async function getExempleController(req, res) {
try {
  const queryExemple = await allExemple.getExempleRepository()
    return res.send(queryExemple.rows)
} catch (error) {
  return res.sendStatus(500).send(error)
}
}

export {
  getExempleController
}
