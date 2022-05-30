import Mock from "mockjs";
let userData = [
    {
        username: 'admin',
        password: '123456',
        roles: 'admin',
        name: '管理员',
        age: 23,
        job: '前端工程师',
        token: '000111222333444555666',
        id: '1',
    }, {
        username: 'editor',
        password: '123456',
        roles: 'editor',
        name: '测试1',
        'age|20-30': 23,
        job: '前端工程师',
        token: '145145145123123123111',
        id: '2',
    }
]
export default [
    // 用户登录
    {
        url: "/user/info",
        type: 'get',
        response: () => {
            return {
                code: 200,
                message: "成功",
                data: userData
            }
        }
    },
    // 登录
    {
        url: "/login",
        type: "post",
        response: (option: any) => {
            const data = JSON.parse(option.body)
            for (let index = 0; index < userData.length; index++) {
                if (userData[index].username == data.account && userData[index].password == data.pass) {
                    return Mock.mock({
                        code: 200,
                        message: "成功",
                        data: userData[index],
                    });
                } else {
                    return Mock.mock({
                        code: 400,
                        message: "账号或密码不正确",
                        data: null,
                    });
                }
            }
            if (data) {
                return Mock.mock({
                    code: 200,
                    message: "成功",
                    data: {
                        name: "testToken",
                    },
                });
            } else {
                return Mock.mock({
                    code: 400,
                    message: "未提交参数111",
                });
            }
        },
    },
];