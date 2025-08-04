import { mockAccounts } from "@/data/accounts";

export function updateAccountStatus(id: string, newStatus: string) {
  const account = mockAccounts.find((a) => a.id === id);
  if (account) {
    account.status = newStatus;
  }
}
