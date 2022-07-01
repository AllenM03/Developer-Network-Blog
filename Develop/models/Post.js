//Import sequalize library/package
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

///defines 'post' as a model/////
class Post extends Model {}

/// Creates new model for a Post
Post.init({
    ////Column definitions for the model()
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    contents: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            Model: 'user',
            key: 'id'
        }
    },    

    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },


///Sequalize Options for this model, OR RULES for each column         
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
    }
);
///Export this model as a 'POST'
module.exports = Post;