import { Button } from "@/components/ui/button";

type EmptyStateProps = {
    title?: string;
    description?: string;
};

export default function EmptyState({
    title = "No data found",
    description = "There are no users to display yet.",
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <img
                src="/assets/images/no-data.svg"
                alt="No data"
                className="w-60 mb-4 opacity-80 text-muted-foreground dark:text-muted-foreground"
            />

            <h3 className="text-lg font-semibold text-foreground">
                {title}
            </h3>

            <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                {description}
            </p>
        </div>
    );
}
