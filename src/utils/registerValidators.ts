// 注册表单数据验证
import { reactive } from 'vue'

interface RegisterUser {
    name: string;
    email: string;
    password: string;
    password2: string;
    role: string;
}

export const registerUser = reactive<RegisterUser>({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: ''
})

interface RegisterRules {
    name: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    password2: {
        validator: (rule: RegisterRules, value: string, callback: any) => void;
        trigger: string;
    }[];
}

// ? 确认密码校验回调函数
const validatePass2 = (rule: RegisterRules, value: string, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== registerUser.password) {
        callback(new Error('请输入相同的密码'))
    } else {
        callback()
    }
}

export const registerRules = reactive<RegisterRules>({
    name: [
        {
            message: '用户名不能为空',
            required: true,
            trigger: 'blur',
        },
        {
            min: 2,
            max: 30,
            message: '用户名长度在 2 到 30 字符',
            trigger: 'blur'  // 元素失去焦点的时候触发
        }
    ],
    email: [
        {
            // ? 与表单组件中的 prop 保持一致
            type: 'email',
            message: '邮箱的格式有误',
            required: true,
            trigger: 'blur'  // 元素失去焦点的时候触发
        }
    ],
    password: [
        {
            message: '密码不能为空',
            required: true,
            trigger: 'blur'
        },
        {
            min: 6,
            max: 30,
            message: '密码长度范围必须在 6~30 字符内',
            trigger: 'blur'
        }
    ],
    password2: [
        {
            validator: validatePass2,
            trigger: 'blur'
        }
    ]
})