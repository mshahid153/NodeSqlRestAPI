// Define Post Model:
module.exports = (sequelize, DataTypes) => {

    const Post  = sequelize.define("post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        }
    
    })

    return Post

}