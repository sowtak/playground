export type User = {
    userId: number
    email: string
    isActive: boolean
    activationCode: string | null
    passwordResetCode: string | null
    provider: string
    roles: Array<String>
};

export type UserData = {
    email: string
    password: string
};

export type UserRegistration = {
    email: string
    username: string
    password: string
};

export type AuthErrors = {
    usernameError: string
    emailError: string
    passwordError: string
    password2Error: string
};

export type Post = {

}