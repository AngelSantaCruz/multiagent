'use client'

import React, { useState } from 'react'
import { Button } from '../../../components/ui/button'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Table, 
  TableBody,
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow } from '../../../components/ui/table'
import { DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger } from '../../../components/ui/dropdown-menu'
import { ArrowUpDown, 
  ChevronDown,
   MoreHorizontal } from 'lucide-react'
import { Input } from '../../../components/ui/input'
import { Checkbox } from '../../../components/ui/checkbox'

const data: Payment[] = [
  {
    id: "m5gr84i9",
    chats: 316,
    Estado: "Activo",
    Correo: "ken99@yahoo.com",
    Nombre:'ken'
  },
  {
    id: "3u1reuv4",
    chats: 242,
    Estado: "Activo",
    Correo: "Abe45@gmail.com",
    Nombre:'Abe'
  },
  {
    id: "derv1ws0",
    chats: 837,
    Estado: "Desactivado",
    Correo: "Monserrat44@gmail.com",
    Nombre:'Monserrat'
  },
  {
    id: "5kma53ae",
    chats: 874,
    Estado: "Activo",
    Correo: "Silas22@gmail.com",
    Nombre:'Silas'
  },
  {
    id: "bhqecj4p",
    chats: 721,
    Estado: "Desactivado",
    Correo: "carmella@hotmail.com",
    Nombre:'carmell'
  },
]
 
type Payment = {
  id: string
  chats: number
  Estado: "pending" | "processing" | "Activo" | "Desactivado"
  Correo: string
  Nombre:string
}
 
const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Nombre",
    header: "Nombre",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Nombre")}</div>
    ),
  },
  {
    accessorKey: "Estado",
    header: "Estado",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Estado")}</div>
    ),
  },
  {
    accessorKey: "Correo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("Correo")}</div>,
  },
  {
    accessorKey: "chats",
    header: () => <div className="text-right">chats</div>,
    cell: ({ row }) => {
      const chats = parseFloat(row.getValue("chats"))
 
    
 
      return <div className="text-right font-medium">{chats}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 p-0  w-full">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end"> 
          
            <DropdownMenuSeparator />
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
            <DropdownMenuItem className='text-red-500'>Borrar agente</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
 
function Page() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
 
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
 
  return (
    <div className="w-full p-10">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar Correos..."
          value={(table.getColumn("Correo")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Correo")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sin resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de {" "}
          {table.getFilteredRowModel().rows.length} columna seleccionada.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
           Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page