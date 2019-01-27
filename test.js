var axios=require('axios');

axios.defaults.withCredentials=true;

axios.post('https://allinone.xiaogj.com/api/employee/Query',
{
    PageSize:200,
    PageIndex:1,
    TotalCount:940,
    PageCount:5,
    displayChildEmp:1,
    Status:1,
    sort:'Name',
    desc:0,
    download:1
},{
    headers:{
        Cookie:'chargeVersion=2; lastloginname=%E5%94%90%E6%97%AD%E5%85%8B%40allinone; %E5%94%90%E6%97%AD%E5%85%8B%40allinoneGetNewChargeGuide=true; 201706201422employeeManage%23employeeManage_table%23employeeManage_selectColum=%5B%5D; autologin=null; loginname=null; loginpwd=null; TermManage=; YearManage=; 201706201422reportConsumeDetail%23reportConsumeDetail_table%23reportConsumeDetail_selectColum=%5B%22%E7%8F%AD%E5%9E%8B%22%2C%22%E7%A7%91%E7%9B%AE%22%2C%22%E7%8F%AD%E7%BA%A7%22%2C%22%E4%B8%8A%E8%AF%BE%E5%86%85%E5%AE%B9%22%2C%22%E5%AD%A6%E7%AE%A1%E5%B8%88%22%2C%22%E7%8F%AD%E4%B8%BB%E4%BB%BB%22%2C%22%E5%9C%A8%E8%81%8C%E7%B1%BB%E5%9E%8B%22%2C%22%E8%80%81%E5%B8%88%E7%BA%A7%E5%88%AB%22%2C%22%E6%94%B6%E8%B4%B9%E6%97%A5%E6%9C%9F%22%2C%22%E6%94%B6%E6%8D%AE%E5%8F%B7%22%2C%22%E6%94%B6%E8%B4%B9%E6%A0%A1%E5%8C%BA%22%5D; 201706201422customerManage%23customerManage_table%23customerManage_selectColum=%5B%5D; ASP.NET_SessionId=zeva5el2xpvj0yeirj0pqs5i; .ASPXAUTH=7FBAE11E5DDCC171A64A07CCC8178201C272B6A5B2409D345A9B4C9A3FA96A0944C3D0B88A73F01D77204D466F831868236710285E08DDCF92AF39C7A8CD21C102CFADB448242FE4C4C5379568097FEBF40998F76F656C317C4587029D2E7D2EE9AFA2493195561C20CD562E8FE3C7AE88715EDACD9EE8FF839884DB4DEAECCBB3C6C30A21ECFDBBD1BF04B279C67907'
    }
}).then(value=>{
    console.log(value.data)
}).catch(reason=>{
    console.log(reason);
});