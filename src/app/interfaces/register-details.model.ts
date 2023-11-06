import { Skill } from './skill.model';

export interface RegisterDetailsModel {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    validated: boolean;
    cpf: string;
    skills: Skill[]; 
}
