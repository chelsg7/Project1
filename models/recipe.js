'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    ing1: DataTypes.STRING,
    ing2: DataTypes.STRING,
    ing3: DataTypes.STRING,
    ing4: DataTypes.STRING,
    ing5: DataTypes.STRING,
    step1: DataTypes.STRING,
    step2: DataTypes.STRING,
    step3: DataTypes.STRING,
    step4: DataTypes.STRING,
    step5: DataTypes.STRING,
<<<<<<< HEAD
<<<<<<< HEAD
    score: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // Recipe.belongsTo(models.Users, {
    //   // foreignKey: {
    //   //   allowNull: false
    //   // }
    // });
    // ingredients: DataTypes.STRING,
    steps: DataTypes.STRING,
    healthlabel: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // Recipe.hasOne(models.Steps);
    // Recipe.hasOne(models.Ingredients);
=======
    score: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
=======
    score: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
>>>>>>> 794de6f82a67c6eb1e008fb1bf855a52cf0fa5e0
    // Recipe.belongsTo(models.Users, {
    //   // foreignKey: {
    //   //   allowNull: false
    //   // }
    // });
<<<<<<< HEAD
>>>>>>> 794de6f82a67c6eb1e008fb1bf855a52cf0fa5e0
=======
>>>>>>> 794de6f82a67c6eb1e008fb1bf855a52cf0fa5e0
  };
  return Recipe;
};

 