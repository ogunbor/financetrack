"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { deleteTransaction } from "./actions";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

export default function DeleteTransactionDialog({
    transactionId,
    transactionDate,
}: {
    transactionId: number;
    transactionDate: string;
}) {
    const router = useRouter();

    const handleDeleteConfirm = async () => {
        const result = await deleteTransaction(transactionId);

        if (result?.error) {
            toast("Error", {
                description: result.message,
            });
            return;
        }

        toast("Success", {
            description: "Transaction deleted",
            className: "bg-green-500 text-white"
        });

        const [year, month] = transactionDate.split("-");

        router.push(`/dashboard/transactions?month=${month}&year=${year}`);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive" size="icon">
                    <Trash2Icon />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This transaction will be permanently
                        deleted.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button onClick={handleDeleteConfirm} variant="destructive">
                        Delete
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}