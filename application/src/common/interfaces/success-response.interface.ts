export interface SuccessResponse<T = unknown> {
  success: true;
  message: string;
  data: T;
}
