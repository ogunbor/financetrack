import { getAnnualCashflow } from "@/data/getAnnualCashflow";


export default async function Cashflow() {
    const cashflow = await getAnnualCashflow(2025)
    return (
        <div />
    );
}