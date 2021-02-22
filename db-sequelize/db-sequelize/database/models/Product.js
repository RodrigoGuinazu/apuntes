module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,2), /*CONSULTAR ALE*/
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true // Esto sirve para el Soft Delte (Cuando el usuario pide borrar algo no es que lo eliminamos de la DB si no que actualizamos el campo deleted_at)
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsToMany(models.User, {
            as: "users",
            through: "users_products", // En este caso la tabla pivot solo tiene las foreignKeys y los timestamps. En el caso de que la tabla pivot tenga mas datos que los mencionados antes, podemos en ves de poner "users_products" directamente podemos relacionarla con el modelo (models.User_product) y asi acceder a las columnas extras.
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: true
        })
    }
    
    return Product
}