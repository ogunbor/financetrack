import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategories } from "@/data/getCategories";
import Link from "next/link";

import { notFound } from "next/navigation";
import EditTransactionForm from "./edit-transaction-form";
import { getTransaction } from "@/data/getTransaction";

export default async function EditTransactionPage({
    params,
}: {
    params: Promise<{ transactionId: string }>;
}) {
    const paramsValues = await params;
    const transactionId = Number(paramsValues.transactionId);

    if (isNaN(transactionId)) {
        notFound();
    }
    const categories = await getCategories();
    const transaction = await getTransaction(transactionId);

    if (!transaction) {
        notFound();
    }
    return (
        <div className="max-w-screen-xl mx-auto py-10">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard/transactions">Transactions</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>New Transaction</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Card className="mt-4 max-w-screen-md">
                <CardHeader>
                    <CardTitle>Edit Transaction</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditTransactionForm
                        transaction={transaction}
                        categories={categories}
                    />
                </CardContent>
            </Card>
        </div>
    );
}