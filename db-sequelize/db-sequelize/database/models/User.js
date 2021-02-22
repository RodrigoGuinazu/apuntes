module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true // Esto sirve para el Soft Delte (Cuando el usuario pide borrar algo no es que lo eliminamos de la DB si no que actualizamos el campo deleted_at)
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "role_id"
        }),
        User.belongsToMany(models.Product, { 
            as: "products",
            through: "users_products", // En este caso la tabla pivot solo tiene las foreignKeys y los timestamps. En el caso de que la tabla pivot tenga mas datos que los mencionados antes, podemos en ves de poner "users_products" directamente podemos relacionarla con el modelo (models.User_product) y asi acceder a las columnas extras.
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: true
        }),
        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "user_id_address"
        })
    }
    
    return User
}
