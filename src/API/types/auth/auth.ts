export type LoginBody = {
    email: string,
    password: string
}

export type RegisterBody = {
    fullName: string,
    email: string,
    password: string,
    repeatPassword: string,
}

//to send otp to email
export type EmailBody = {
    email: string,
}

export type UserBody = {
    id?      : string,
    fullName?  : string,
    email?     : string,
    phone?    : string | null,
    createdAt? : Date,
    token: string
}

//reset password 
export type PasswordResetBody = {
    email : string,
    password: string,
    repeatPassword: string
}

//otp
export type OtpBody = {
    email: string,
    code : string,
    keyVal   : string
}

