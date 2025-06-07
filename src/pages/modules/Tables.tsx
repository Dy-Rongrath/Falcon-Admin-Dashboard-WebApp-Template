import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Download,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Star,
  ArrowUpDown,
} from "lucide-react";

const Tables: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Sample data
  const employees = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@company.com",
      department: "Engineering",
      position: "Senior Developer",
      status: "active",
      salary: 95000,
      joinDate: "2022-01-15",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      department: "Design",
      position: "UX Designer",
      status: "active",
      salary: 78000,
      joinDate: "2022-03-20",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@company.com",
      department: "Marketing",
      position: "Marketing Manager",
      status: "inactive",
      salary: 82000,
      joinDate: "2021-08-10",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily.brown@company.com",
      department: "Engineering",
      position: "Frontend Developer",
      status: "active",
      salary: 85000,
      joinDate: "2022-05-12",
      rating: 4.9,
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.w@company.com",
      department: "Sales",
      position: "Sales Representative",
      status: "pending",
      salary: 65000,
      joinDate: "2023-01-08",
      rating: 4.1,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa.a@company.com",
      department: "HR",
      position: "HR Specialist",
      status: "active",
      salary: 72000,
      joinDate: "2021-11-30",
      rating: 4.5,
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "robert.t@company.com",
      department: "Engineering",
      position: "Backend Developer",
      status: "active",
      salary: 92000,
      joinDate: "2022-07-22",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Jennifer Martinez",
      email: "jennifer.m@company.com",
      department: "Finance",
      position: "Financial Analyst",
      status: "active",
      salary: 75000,
      joinDate: "2022-09-15",
      rating: 4.3,
    },
    {
      id: 9,
      name: "Christopher Lee",
      email: "chris.lee@company.com",
      department: "Operations",
      position: "Operations Manager",
      status: "inactive",
      salary: 88000,
      joinDate: "2021-12-05",
      rating: 4.0,
    },
    {
      id: 10,
      name: "Amanda Garcia",
      email: "amanda.g@company.com",
      department: "Design",
      position: "Graphic Designer",
      status: "active",
      salary: 68000,
      joinDate: "2023-02-28",
      rating: 4.4,
    },
    {
      id: 11,
      name: "James Rodriguez",
      email: "james.r@company.com",
      department: "Engineering",
      position: "DevOps Engineer",
      status: "active",
      salary: 98000,
      joinDate: "2021-10-12",
      rating: 4.8,
    },
    {
      id: 12,
      name: "Michelle Thompson",
      email: "michelle.t@company.com",
      department: "Marketing",
      position: "Content Specialist",
      status: "pending",
      salary: 62000,
      joinDate: "2023-03-10",
      rating: 4.2,
    },
  ];

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    let filtered = employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        filterStatus === "all" || employee.status === filterStatus;
      return matchesSearch && matchesStatus;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof typeof a];
        const bValue = b[sortConfig.key as keyof typeof b];

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, filterStatus, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return { key, direction: current.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const handleSelectRow = (id: number) => {
    setSelectedRows((current) =>
      current.includes(id)
        ? current.filter((rowId) => rowId !== id)
        : [...current, id],
    );
  };

  const handleSelectAll = () => {
    setSelectedRows((current) =>
      current.length === paginatedData.length
        ? []
        : paginatedData.map((item) => item.id),
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const SortableHeader: React.FC<{
    column: string;
    children: React.ReactNode;
  }> = ({ column, children }) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 select-none"
      onClick={() => handleSort(column)}
    >
      <div className="flex items-center space-x-1">
        <span>{children}</span>
        <ArrowUpDown className="w-4 h-4" />
        {sortConfig?.key === column &&
          (sortConfig.direction === "asc" ? (
            <ChevronUp className="w-4 h-4 text-blue-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-blue-500" />
          ))}
      </div>
    </th>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Tables</h1>
          <p className="text-gray-600">
            Advanced data tables with sorting, filtering, pagination, and bulk
            actions
          </p>
        </div>

        {/* Advanced Data Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Table Header Controls */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Employee Directory
                </h3>
                <span className="text-sm text-gray-500">
                  ({filteredData.length} employees)
                </span>
              </div>

              <div className="flex items-center space-x-3">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                </div>

                {/* Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>

                {/* Export */}
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Bulk Actions */}
            {selectedRows.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between">
                <span className="text-sm text-blue-700">
                  {selectedRows.length} employee(s) selected
                </span>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                    Edit Selected
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                    Delete Selected
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={
                        selectedRows.length === paginatedData.length &&
                        paginatedData.length > 0
                      }
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </th>
                  <SortableHeader column="name">Name</SortableHeader>
                  <SortableHeader column="department">
                    Department
                  </SortableHeader>
                  <SortableHeader column="position">Position</SortableHeader>
                  <SortableHeader column="status">Status</SortableHeader>
                  <SortableHeader column="salary">Salary</SortableHeader>
                  <SortableHeader column="rating">Rating</SortableHeader>
                  <SortableHeader column="joinDate">Join Date</SortableHeader>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((employee) => (
                  <tr
                    key={employee.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(employee.id)}
                        onChange={() => handleSelectRow(employee.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-700">
                            {employee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {employee.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {employee.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {employee.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {employee.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(employee.status)}`}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${employee.salary.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-900">
                          {employee.rating}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(employee.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">entries</span>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1 border rounded text-sm ${
                        currentPage === page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return (
                    <span key={page} className="px-1">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>

            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} entries
            </div>
          </div>
        </div>

        {/* Simple Tables Examples */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Basic Table
              </h3>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    MacBook Pro
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">$2,399</td>
                  <td className="px-6 py-4 text-sm text-gray-900">12</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">iPhone 14</td>
                  <td className="px-6 py-4 text-sm text-gray-900">$999</td>
                  <td className="px-6 py-4 text-sm text-gray-900">25</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">iPad Air</td>
                  <td className="px-6 py-4 text-sm text-gray-900">$599</td>
                  <td className="px-6 py-4 text-sm text-gray-900">8</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Striped Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Striped Table
              </h3>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { user: "John Doe", role: "Admin", status: "Active" },
                  { user: "Jane Smith", role: "User", status: "Active" },
                  { user: "Bob Johnson", role: "User", status: "Inactive" },
                  { user: "Alice Brown", role: "Editor", status: "Active" },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {row.user}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {row.role}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          row.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
