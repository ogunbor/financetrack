"use client";

import TransactionForm, {
    transactionFormSchema,
} from "@/components/transaction-form";
import { toast } from "sonner"
import { type Category } from "@/types/Category";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { format } from "date-fns";
import { updateTransaction } from "./actions";

export default function EditTransactionForm({
    categories,
    transaction,
}: {
    categories: Category[];
    transaction: {
        id: number;
        categoryId: number;
        amount: string;
        description: string;
        transactionDate: string;
    };
}) {
    const router = useRouter();


    const handleSubmit = async (data: z.infer<typeof transactionFormSchema>) => {
        const result = await updateTransaction({
            id: transaction.id,
            amount: data.amount,
            description: data.description,
            categoryId: data.categoryId,
            transactionDate: format(data.transactionDate, "yyyy-MM-dd"),
        });

        if (result?.error) {
            toast("Error", {
                description: result.message,
            });
            return;
        }

        toast("Success", {
            description: "Transaction updated",
            className: "bg-green-500 text-white"
        });

        router.push(
            `/dashboard/transactions?month=${data.transactionDate.getMonth() + 1
            }&year=${data.transactionDate.getFullYear()}`
        );
    };
    return (
        <TransactionForm
            defaultValues={{
                amount: Number(transaction.amount),
                categoryId: transaction.categoryId,
                description: transaction.description,
                transactionDate: new Date(transaction.transactionDate),
                transactionType:
                    categories.find((category) => category.id === transaction.categoryId)
                        ?.type ?? "income",
            }}
            onSubmit={handleSubmit}
            categories={categories}
        />
    );
}