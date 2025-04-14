export const successResponse = (message: string, data: any = {}) => {
  return {
    success: true,
    message,
    data,
  };
};
  
export const errorResponse = (message: string, status = 400) => {
  return {
    success: false,
    message,
    status,
  };
};
  