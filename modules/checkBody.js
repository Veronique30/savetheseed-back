function checkBody(body, keys) {
  let isValid = true;

  for (const field of keys) {
    if (!body[field] || body[field] === "") {
      isValid = false;
    }
  }

  return isValid;
}

module.exports = { checkBody };
// Essentiellement, cette fonction est utilisée pour valider si certains champs
// dans un objet (body) ont des valeurs non vides
// Si l'un des champs spécifiés est manquant ou a une valeur vide,
//  la fonction renvoie false; sinon, elle renvoie true.
