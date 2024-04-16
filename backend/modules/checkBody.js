function checkBody(body, fields) {
  // Vérifie si chaque champ requis existe dans l'objet body
  for (let field of fields) {
    console.log(body);
    if (!body[field] || body[field] === undefined) {
      return false;
    }
  }
  // Si tous les champs requis sont présents et non vides, retourne true
  return true;
}

module.exports = { checkBody };
