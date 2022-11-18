const { check, validationResult } = require("express-validator");

//Validation register

exports.registerRules = () => [
  check("name", "name is required").notEmpty(),
  check("lastName", "lastname is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check("password", "password must be  between 6 and 12 character").isLength({
    min: 6,
    max: 12,
  }),

];

//Validation login
exports.loginRules = () => [
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check("password", "password must be  between 6 and 12 character").isLength({
    min: 6,
    max: 12,
  }),
];

// validation produit

exports.produitRules = () => [
  check("produit_name", "produit name is required").notEmpty(),
  check("support", "support is required").notEmpty(),
  check("accessoire", "accessoire is required").notEmpty(),
  check("fils", "fils is required").notEmpty(),
  check("prix", "prix is required").notEmpty(),
  check("livraison", "livraison is required").notEmpty(),
  check("kits", "kits is required").notEmpty(),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((e) => ({
        msg: e.msg,
      })),
    });
  }
  next();
};
