export interface User {
    firstName: string ;
    lastName: string ;
    age?: number;
    address?: {
        city?: string,
        country?: string,
        state?: string
    };
    image?: string;
    isActive?: boolean;
    balance?: number;
    registred?: any;
}
