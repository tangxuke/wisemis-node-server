var fs=require('fs');

/**
 * 根据对象生成数据结构及表格配置信息
 */
var o={
Age: "",
Birthday: "",
CampusID: "3fbfec48-3599-49e9-8c2d-33e7cebd233a",
CampusName: "长安贝米",
ClassName: "",
CommunicationCount: 0,
CreateTime: "2018-12-16 20:56",
CreateUserName: "",
CustomerStatus: "00000000-0000-0000-0000-000000000000",
CustomerStatusName: "",
DefaultContact: "",
DefaultContactTel: "",
DeputySalePersonName: "",
Describe: " 在线预约 - 2018-12-16",
EnglishName: "",
Father: "",
FatherTel: "",
Field1: "",
Field2: "",
Field3: "",
Field4: "",
Field5: "",
Field6: "",
Field7: "",
Field8: "",
Field9: "",
Field10: "",
FullTimeSchool: "东莞外国语学校",
Grade: "初三",
ID: "18277d7e-8556-4f0d-b08e-9e77cce8adfd",
IntroducerName: "",
InviteDate: "",
IsRead: 1,
IsRecycle: 0,
IsVisit: 0,
LastContent: "",
LastDate: "",
LastDateFriendly: "",
LastModeName: "",
LastUserName: "",
LivePlace: "",
Mother: "",
MotherTel: "",
Name: "陈晓翰",
NextDate: "",
NextDateFriendly: "",
NextModeName: "",
OughtPay: "0",
RecycleTime: "",
SMSTel: "13669877223",
SaleModeName: "在线报名",
SalePersonID: null,
SalePersonName: "",
Sex: 1,
ShiftName: null,
TransferDate: "",
TryClassStatus: 0,
TryDate: "",
VisitDate: "",
WillLevel: 0,
WillShift: "00000000-0000-0000-0000-000000000000",
marketInfoOneId: "",
marketInfoOneUserId: "",
marketInfoOneUserName: "",
marketInfoOneValue: "",
marketInfoTwoId: "",
marketInfoTwoUserId: "",
marketInfoTwoUserName: "",
marketInfoTwoValue: "",
saleModeSecName: "",
};

var columns=[];

for(var p in o){
    var col={
        key:p,
        title:p,
        width:120
    };
    columns.push(col);
}

var filename="C:\\vue.js\\school\\src\\api\\zhaosheng\\yxkhgl\\columns.js";
var code='export default '+JSON.stringify(columns);
code=code.replace(/\,/g,',\n');
code=code.replace(/\{/g,'{\n');
code=code.replace(/\}/g,'\n}');
fs.writeFileSync(filename,code);

console.log('finish');