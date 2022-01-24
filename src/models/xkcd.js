module.exports = (sequelize, DataTypes) =>{
    const Xkcd = sequelize.define('xkcd', {
      id: {
        type: DataTypes.INTEGER(255),
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      altext: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      imagelink: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
  
    }, {
      tableName: 'XKCD'
    });
    return Xkcd;
  };
  