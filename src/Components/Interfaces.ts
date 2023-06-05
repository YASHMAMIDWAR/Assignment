export interface Employee {
  id: number;
  name: string;
  email: string;
  phone: number;
  active: boolean;
}

export interface DeleteConfirmInterface {
  closeModal: (ID: number) => void;
  ID: number;
}