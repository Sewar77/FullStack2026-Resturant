
export const setAccessTokenCookie = (res, token) => {
    res.cookie("accessToken", token, {
        httpOnly: true,
        secure: false, //true in development, but false in production
        sameSite: "Lax",
        maxAge: 24 * 60 * 60 * 1000
    })
}

export const setRefreshTokenCookie = (res, token) => {
    res.cookie("refreshTokens", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 24 * 60 * 60 * 1000
    })
}

export const clearTokensCookies = (res) => {
    res.clearCookie("accessToken")
    res.clearCookie("refreshTokens")
}