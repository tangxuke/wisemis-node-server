/**
 * MySQL连接对象
 * @param {string} database 可选数据库
 */
function Connection(database) {
    return {
        host: 'rm-wz950e45r1zk7h4g0eo.mysql.rds.aliyuncs.com',
        port: 3306,
        user: 'root',
        password: 'hlh***TXK0921',
        database: database || 'wisemis',
        multipleStatements: true,
        connectTimeout: 1 * 60 * 1000    //连接超时3分钟
    }
}

module.exports = Connection;