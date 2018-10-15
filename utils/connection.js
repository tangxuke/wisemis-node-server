/**
 * MySQL 连接选项
 * @param {string} database 数据库，可选
 */
function Connection(database) {
    return {
        host: 'gz-cdb-0jo34sqt.sql.tencentcdb.com',
        port: 62178,
        user: 'root',
        password: 'hlh***TXK0921',
        database: database || 'wisemis',
        connectTimeout: 1 * 60 * 1000    //连接超时1分钟
    }
};

module.exports = Connection;