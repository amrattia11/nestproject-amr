export abstract class BaseEntity {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date | null;
  isDeleted: boolean = false;
  isArchived: boolean = false;
}
