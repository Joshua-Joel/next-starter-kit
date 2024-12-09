import { Loan } from '@/types';
import Image from 'next/image';
import L from '@/utils/localization';
import { getLoan } from '@/services/loan';

export default async function OverviewPage() {
  const loan: Loan = await getLoan();
  return (
    <div className="loan-overview-wrapper">
      <Image src="/images/logo.svg" width={120} height={70} alt="Logo image"></Image>
      <h2 className="header">{L.t('LoanOverviewContent.header')}</h2>
      <h3 className="welcome">{L.t('LoanOverviewContent.welcome')}</h3>
      <span>Your loan number is {loan.loanNumber}</span>
      <span>Your customer Id is {loan.customerId}</span>
      <span>Your monthly EMI is {loan.emi}</span>
      <button className="manage-autopay">Manage autopay</button>
    </div>
  );
}
