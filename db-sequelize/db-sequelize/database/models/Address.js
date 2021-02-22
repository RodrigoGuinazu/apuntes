module.exports = (sequelize, dataTypes) => {
    let alias = "Address";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        city: {
            type: dataTypes.STRING,
            allowNull: false
        },
        street: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_id_address: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Address = sequelize.define(alias, cols, config);

    Address.associate = function(models){
        Address.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id_address"
        })
    }
    
    return Address
}