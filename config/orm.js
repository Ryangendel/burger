var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr = [];
    for (var i = 0 ; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}

function objToSQL (ob){
    var arr=[];

    for (var key in ob){
        if (Object.hasOwnproperty.call(ob, key)){
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}


var orm = {
    all: function (tableInput, callback){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            callback(result);
        });
    },

    create: function (table, cols, vals, callback){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

    connection.query(queryString, vals, function(err, result){
        if (err){
            throw err;
        }
        callback(result);
        });
    },
    update: function(table, objColVals, condition, callback){
        var queryString = "UPDATE" + table;
        queryString += "SET";
        queryString += objToSql(objColVals);
        queryString += "WHERE";
        queryString += condition;

        connection.query(queryString, function (err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
     },

     delete: function (table, condition, callback){
         var queryString = "DELETE FROM" + table;
         queryString += "WHERE";
         queryString += condition;
        
         connection.query(queryString, function (err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
    } 
};

module.exports = orm;


