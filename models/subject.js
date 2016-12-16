const thinky = require('../lib/thinky');
const type = thinky.type;
const r = thinky.r;

const Construct = thinky.createModel('Construct', {
    id: type.string(),
    createdAt: type.date().default(r.now()),
    name:type.string().required(),
    backbone: type.string()
});

module.exports = Construct;