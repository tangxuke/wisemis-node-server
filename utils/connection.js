/**
 * MySQL 连接选项
 * @param {string} database 数据库，可选
 */
function Connection(database) {
    //阿里云
    return {
        host: 'rm-wz950e45r1zk7h4g0eo.mysql.rds.aliyuncs.com',
        port: 3306,
        user: 'root',
        password: 'hlh***TXK0921',
        database: database || 'wisemis',
        connectTimeout: 1 * 60 * 1000    //连接超时1分钟
    }
};

module.exports = Connection;