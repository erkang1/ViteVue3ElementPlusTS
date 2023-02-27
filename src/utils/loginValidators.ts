// 登录表单数据验证

import { reactive } from 'vue'

interface User{
    email: string
    password: string
}

export const loginUser = reactive<User>({
    email: '',
    password: ''
})

// 配置规则
interface Rules{
    email:{
        type: string
        message: string
        required: boolean
        trigger: string
    }[];
    password:({
        message: string
        required: boolean
        trigger: string
        min?: undefined
        max?: undefined
    } | {
        min: number
        max: number
        message: string
        trigger: string
        required?: undefined
    })[]
}

export const rules = reactive<Rules>({
    email: [
        {
            type: 'email',
            message: '邮箱格式有误',
            required: true,
            trigger: 'blur'     // 元素失去焦点的时候触发
        }
    ],
    password: [
        {
            message: '密码为空',
            required: true,
            trigger:'blur'
        },
        {
            min: 6,
            max: 30,
            message: '密码长度范围必须在 6~30 字符内',
            trigger: 'blur'
        }
    ]
})