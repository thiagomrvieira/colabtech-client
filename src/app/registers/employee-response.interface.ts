export interface EmployeeResponse {
    data: Employee[];
}
  
export interface Employee {
    id: number;
    name: string;
    email: string;
    cpf: string;
    phone: string | null;
    validated: boolean;
    validated_at: string | null;
    skills: Skill[];
}
  
export interface Skill {
    id: number;
    name: string;
}
  