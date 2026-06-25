export function usePasswordStrength() {
    const validateStrength = (password: string) => {
         let score = 0;

        if (!password || password.length == 0 ) return -1
        if (password.length >= 8) score++
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
        if (/\d/.test(password)) score++
        if (/[^a-zA-Z0-9]/.test(password)) score++

        if (score <= 1) return 0
        if (score <= 3) return 1

        return 2
    }

    const getPasswordStatus = (strength: number | null) => {
        switch(strength) {
            case 0: return 'Weak'
            case 1: return 'Medium'
            case 2: return 'Strong'
            default: return '---'
        }
    }
    
    return {
        validateStrength,
        getPasswordStatus
    }
}