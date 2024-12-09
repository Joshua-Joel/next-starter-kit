import { Loan } from '@/types';
import L from "@/utils/localization";

export const getLoan = async ():Promise<Loan>  => {
  const res = await fetch('http://localhost:5000/loans/123', { cache: 'no-store' });

  if (!res.ok) {
    null;
  }

  const loan: Loan = await res.json();

  return loan;
};

export default async function OverviewPage() {
  const loan: Loan = await getLoan();
  return (
    <div className='loan-overview-wrapper'>
      <h2 className='header'>{L.t("LoanOverviewContent.header")}</h2>
      <h3 className='welcome'>{L.t("LoanOverviewContent.welcome")}</h3>
      <span>Your loan number is {loan.loanNumber}</span>
      <span>Your customer Id is {loan.customerId}</span>
      <span>Your monthly EMI is {loan.emi}</span>
      <button className='manage-autopay'>Manage autopay</button>
    </div>
  );
}
