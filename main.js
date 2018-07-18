const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Deveria'))

app.listen(8027, () => console.log('Ouvindo a rede mundial de computadores na porta 8027!'))
