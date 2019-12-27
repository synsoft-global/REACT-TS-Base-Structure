export interface ILocalNotification {
  uid: string;
  message: string;
  open: boolean;
  variant: "success" | "error" | "info" | "warning";
}
