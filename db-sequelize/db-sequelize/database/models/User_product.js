module.exports = (sequelize, dataTypes) => {
    let alias = "User_product";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        user_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const User_product = sequelize.define(alias, cols, config);
    
    return User_product
}