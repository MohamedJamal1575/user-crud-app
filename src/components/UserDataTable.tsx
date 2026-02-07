import { Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { usePagination } from '@/hooks/usePagination';
import SharedPagination from './SharedPagination';
import { User } from '@/types/user';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import EmptyState from './EmptyState';


type UserDataTableProps = {
  users: Record<string, any>;
  onEdit: (user: User) => void;
  onDelete: (id: string) => Promise<void>
}

export default function UserDataTable({ users, onEdit, onDelete }: UserDataTableProps) {
  const pagination = usePagination({
    totalItems: users.length,
    initialPageSize: 5,
    initialPage: 1,
  });

  const paginatedUsers = users.slice(
    pagination.startIndex,
    pagination.endIndex
  );

  if (!users || users.length === 0) {
    return (
      <EmptyState
        title="No users available"
        description="You haven’t added any users yet. Start by creating one."
      />
    );
  }

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="hidden md:block w-full">
        <div className="rounded-lg border border-border overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50 border-b border-border">
                  <TableHead className="font-semibold text-foreground h-12 px-4 whitespace-nowrap">
                    #
                  </TableHead>
                  <TableHead className="font-semibold text-foreground h-12 px-4 whitespace-nowrap">
                    First Name
                  </TableHead>
                  <TableHead className="font-semibold text-foreground h-12 px-4 whitespace-nowrap">
                    Last Name
                  </TableHead>
                  <TableHead className="font-semibold text-foreground h-12 px-4 whitespace-nowrap">
                    Phone Number
                  </TableHead>
                  <TableHead className="font-semibold text-foreground h-12 px-4 whitespace-nowrap">
                    Email Address
                  </TableHead>
                  <TableHead className="font-semibold text-foreground h-12 px-4 text-right whitespace-nowrap">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedUsers.map((user: User, index: number) => {
                  const serialNo = (pagination.currentPage - 1) * pagination.pageSize + index + 1;
                  return (
                    <TableRow
                      key={user.id}
                      className={`
                      border-b border-border/50 transition-colors
                      ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
                      hover:bg-accent/40
                    `}
                    >
                      <TableCell className="font-medium px-4 py-3.5 whitespace-nowrap">
                        {serialNo}
                      </TableCell>
                      <TableCell className="font-medium px-4 py-3.5 whitespace-nowrap">
                        {user.firstName}
                      </TableCell>
                      <TableCell className="px-4 py-3.5 whitespace-nowrap">{user.lastName}</TableCell>
                      <TableCell className="px-4 py-3.5 text-muted-foreground whitespace-nowrap">
                        {user.phone}
                      </TableCell>
                      <TableCell className="px-4 py-3.5 text-muted-foreground">
                        <div className="max-w-xs truncate">
                          {user.email}
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3.5 text-right">
                        <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(user)}
                            aria-label={`Edit ${user.firstName} ${user.lastName}`}
                            className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors flex-shrink-0"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                aria-label={`Delete ${user.firstName} ${user.lastName}`}
                                className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive transition-colors flex-shrink-0"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Delete user?
                                </AlertDialogTitle>

                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete{" "}
                                  <span className="font-semibold">
                                    {user.firstName} {user.lastName}
                                  </span>.
                                </AlertDialogDescription>
                              </AlertDialogHeader>

                              <AlertDialogFooter>
                                <AlertDialogCancel>
                                  Cancel
                                </AlertDialogCancel>

                                <AlertDialogAction
                                  onClick={() => onDelete(user.id)}
                                  variant={'destructive'}
                                  className="text-white hover:bg-red-700"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {paginatedUsers.map((user: User, index: number) => (
          <div
            key={user.id}
            className={`
              rounded-lg border border-border p-4 shadow-sm transition-colors
              ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}
            `}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
                    Name
                  </div>
                  <div className="font-medium text-base">
                    {user.firstName} {user.lastName}
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(user)}
                    aria-label={`Edit ${user.firstName} ${user.lastName}`}
                    className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Delete ${user.firstName} ${user.lastName}`}
                        className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive transition-colors flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Delete user?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete{" "}
                          <span className="font-semibold">
                            {user.firstName} {user.lastName}
                          </span>.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                          onClick={() => onDelete(user.id)}
                          variant={'destructive'}
                          className="text-white hover:bg-red-700"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-1">
                  Phone Number
                </div>
                <div className="text-muted-foreground">{user.phone}</div>
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-1">
                  Email Address
                </div>
                <div className="text-muted-foreground break-words">
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shared Pagination Component - full width container */}
      <div className="w-full max-w-full px-0">
        <SharedPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          pageSize={pagination.pageSize}
          totalItems={users.length}
          onPageChange={pagination.goToPage}
          onPageSizeChange={pagination.setPageSize}
          canGoNext={pagination.canGoNext}
          canGoPrevious={pagination.canGoPrevious}
        />
      </div>
    </div >
  );
}
