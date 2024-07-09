import { createContext, useContext, useState, ReactNode } from 'react';

const AuthContext = createContext<{ userId: string | null; login: (userId: string) => void; logout: () => void } | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null); 

    // Função para definir o userId 
    const login = (userId: string) => {
        setUserId(userId);
    };

    // Função para limpar o userId 
    const logout = () => {
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para autenticação
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
