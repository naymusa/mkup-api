//El servidor se quedará escuchando
const app = require('./express/server');
app.listen(4000, () => console.log('Local app listening on port 4000!'));